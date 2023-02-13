import { CohortOutputComponent } from './../cohort-output/cohort-output.component';
import { Student } from './../student';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog';

import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-input-form',
  templateUrl: './student-input-form.component.html',
  styleUrls: ['./student-input-form.component.scss']
})
export class StudentInputFormComponent {
  public cohortForm: FormGroup;
  public cohortOutput: string = '';

  constructor(
    private _fb: FormBuilder,
    private studentService: StudentService,
    public dialog: MatDialog
  ) {
    this.cohortForm = this._fb.group({
      maxInstructionHours: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      numberOfStudents: [1, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      students: this._fb.array([this.studentForm])
    })
  }

  get studentForm(): FormGroup {
    return this._fb.group({
      name: ['', Validators.required],
      potential: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      hours: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    })
  }

  get students(): FormArray {
    return <FormArray>this.cohortForm.get('students');
  }

  public addStudents(): void {
    let studentNumber: number;
    const numberOfStudentsInput = this.cohortForm.controls['numberOfStudents'];

    if (!numberOfStudentsInput.valid) {
      return;
    }

    studentNumber = this.cohortForm.controls['numberOfStudents'].value
    this.students.clear();
    for (let i = 0; i < studentNumber; i++) {
      this.students.push(this.studentForm);
    }
  }

  public onSubmit(form: FormGroup): void {
    let maxHours: number;
    let students: Student[];
    let cohortResult;
    if (form.valid) {
      maxHours = form.controls['maxInstructionHours'].value;
      students = form.controls['students'].value

      cohortResult = this.studentService.calculateMaxEarnings(students, maxHours);

      this.cohortOutput = `The maximum earnings for this cohort is $${cohortResult.potential} with ${cohortResult.acceptedStudents.join(', ')}.`
      this.dialog.open(CohortOutputComponent, {
        data: {
          output: this.cohortOutput
        }
      })
    }
  }

  public clearForm(): void {
    this.cohortForm.reset();
    this.cohortForm.get('numberOfStudents')?.setValue(1);
    this.students.clear();
    this.students.push(this.studentForm);
    this.cohortOutput = '';
  }
}
