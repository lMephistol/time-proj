import {Component, inject, model} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {TimeApiService} from '../../../services/time-api.service';
import {MatOption, MatSelect} from '@angular/material/select';
import {AsyncPipe} from '@angular/common';
import {FilterPipe} from '../../../shared/pipes/filter.pipe';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {CustomTimeZone} from '../../../shared/models/custom-models';

@Component({
  selector: 'app-zone-dialog',
  imports: [
    MatLabel,
    MatDialogContent,
    MatFormField,
    MatDialogActions,
    MatDialogTitle,
    MatButton,
    MatDialogClose,
    FormsModule,
    MatSelect,
    AsyncPipe,
    MatOption,
    FilterPipe,
    MatProgressSpinner
  ],
  templateUrl: './zone-dialog.component.html',
  styleUrl: './zone-dialog.component.css'
})
export class ZoneDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ZoneDialogComponent>);
  readonly data = inject<ZoneDialogData>(MAT_DIALOG_DATA);
  readonly zoneName = model('');
  private timeApiService = inject(TimeApiService);
  public timeZones$ = this.timeApiService.getAllZones();
  public usedZones: string[] = this.data.zones.map(zone => zone.name);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
export type ZoneDialogData = {
  zones: CustomTimeZone[];
}
