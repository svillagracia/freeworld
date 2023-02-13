import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  output: string;
}

@Component({
  selector: 'app-cohort-output',
  templateUrl: './cohort-output.component.html',
  styleUrls: ['./cohort-output.component.scss']
})
export class CohortOutputComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
