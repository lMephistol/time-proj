import {Component, inject} from '@angular/core';
import {AsyncPipe, DatePipe} from "@angular/common";
import {MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable} from "@angular/material/table";
import {TimeApiService} from '../services/time-api.service';
import {TimeZoneService} from '../services/time-zone.service';
import {concat, interval, map, Observable, of, scan, switchMap} from 'rxjs';
import {MatButton} from '@angular/material/button';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ZoneDialogComponent, ZoneDialogData} from './dialog/zone-dialog/zone-dialog.component';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {MatProgressBar} from '@angular/material/progress-bar';

@Component({
  selector: 'app-time-table',
  imports: [
    AsyncPipe,
    DatePipe,
    MatCell,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatRow,
    MatTable,
    MatButton,
    MatCheckbox,
    MatProgressSpinner,
    MatProgressBar,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef
  ],
  templateUrl: './time-table.component.html',
  styleUrl: './time-table.component.css'
})
export class TimeTableComponent {
  private _dialog = inject(MatDialog);
  private _timeService = inject(TimeApiService);
  private _timeZoneService = inject(TimeZoneService);

  public newZoneLoading = this._timeZoneService.loading;
  public zones = this._timeZoneService.zones;
  public displayedColumns: string[] = ['name', 'abbreviation', 'localTime', 'localDate', 'daylightSavingFlag', 'daylightSavingDates'];
  public utcCounter$: Observable<number> = this._timeService.getCurrentUtcTimeMs().pipe(
    switchMap(utcMs =>
      concat(
        of(utcMs),
        interval(1000).pipe(map(_ => 1000))
      )
    )
  ).pipe(
    scan(((acc, curr) => acc + curr))
  );


  openDialog(): void {

    const config: MatDialogConfig<ZoneDialogData> = {
      data: {
        zones: this.zones(),
      },
      width: '20vw',
      minWidth: '350px',
      maxWidth: '80vw'
    };

    const dialogRef: MatDialogRef<ZoneDialogComponent, string> = this._dialog.open(ZoneDialogComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._timeZoneService.timeZone.set(result);
      }
    });
  }


}
