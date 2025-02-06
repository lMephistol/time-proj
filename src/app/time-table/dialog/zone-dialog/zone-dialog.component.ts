import {Component, inject, model} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatOption, MatSelect} from '@angular/material/select';
import {FilterPipe} from '../../../shared/pipes/filter.pipe';


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
    MatOption,
    FilterPipe,
  ],
  templateUrl: './zone-dialog.component.html',
  styleUrl: './zone-dialog.component.css'
})
export class ZoneDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ZoneDialogComponent>);
  readonly data = inject<ZoneDialogData>(MAT_DIALOG_DATA);
  readonly zoneName = model('');
  public allZones = this.data.allZones;
  public usedZones = this.data.usedZones;

  onNoClick(): void {
    this.dialogRef.close();
  }
}
export type ZoneDialogData = {
  usedZones: string[];
  allZones: string[];
}
