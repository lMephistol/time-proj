import {Component, inject, signal} from '@angular/core';
import {DatePipe, NgIf} from "@angular/common";
import {MatCell, MatColumnDef, MatHeaderCell, MatHeaderRow, MatRow, MatTableModule} from "@angular/material/table";
import {TimeApiService} from '../services/time-api.service';
import {interval, map, of, switchMap, tap} from 'rxjs';
import {MatButton} from '@angular/material/button';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ZoneDialogComponent, ZoneDialogData} from './dialog/zone-dialog/zone-dialog.component';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatProgressBar} from '@angular/material/progress-bar';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {MatIcon} from '@angular/material/icon';
import {SessionStateService} from '../services/session-state.service';
import {transFormData} from '../shared/utils/utils';
import {HttpClient} from '@angular/common/http';
import {rxResource, toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-time-table',
  imports: [
    DatePipe,
    MatCell,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatRow,
    MatTableModule,
    MatButton,
    MatCheckbox,
    MatProgressBar,
    MatProgressSpinner,
    NgIf,
    MatIcon
  ],
  templateUrl: './time-table.component.html',
  styleUrl: './time-table.component.css'
})
export class TimeTableComponent {
  public readonly displayedColumns: string[] = ['name', 'abbreviation', 'localTime', 'localDate', 'daylightSavingFlag', 'daylightSavingDates'];

  private _dialog = inject(MatDialog);
  private _timeService = inject(TimeApiService);
  private _sessionState = inject(SessionStateService);
  private _http = inject(HttpClient);
  private _zonesSession = signal(this._sessionState.getTimeZonesSession());
  private _zoneName = signal<string | undefined>(undefined);

  public zoneState = rxResource({
    request: () => this._zonesSession(),
    loader: ({request}) => {
      if (request.length === 0) {
        return this._http.get<{ ip: string }>('https://api.ipify.org?format=json').pipe(
          switchMap(({ip}) => this._timeService.getTimeZoneInfoByIp(ip)),
          map((data) => transFormData(data)),
          tap((data) => this._sessionState.addTimeZoneSession(data)),
          map((data) => [data]));
      }
      return of(request);

    }
  });

  public zoneLoad = rxResource(
    {
      request: () => (this._zoneName()),
      loader: ({request}) =>
        this._timeService.getTimeZoneInfo(request)
        .pipe(
          map(data => transFormData(data)),
          tap(data => this._sessionState.addTimeZoneSession(data)),
          tap(data => this.zoneState.update(value => [...value!, data]))
        )
    }
  );

  public allZones = toSignal(this._timeService.getAllZones(), {initialValue: null});
  public utcCounterInit = toSignal(this._timeService.getCurrentUtcTimeMs().pipe(
    switchMap(time => interval(1000).pipe(map(val => val * 1000), map(val => val + time)))
  ), {initialValue: null});

  openDialog(): void {
    const usedZones = this.zoneState.value()?.map(zone => zone.name);
    const config: MatDialogConfig<ZoneDialogData> = {
      data: {
        usedZones: usedZones ? usedZones : [],
        allZones: this.allZones()!
      },
      width: '20vw',
      minWidth: '350px',
      maxWidth: '80vw'
    };
    const dialogRef: MatDialogRef<ZoneDialogComponent, string> = this._dialog.open(ZoneDialogComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._zoneName.set(result);
      }
    });
  }
}
