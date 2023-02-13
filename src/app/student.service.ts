import { Injectable } from '@angular/core';

import { Student } from './student';

interface MaxEarningsOutput {
  acceptedStudents: string[];
  potential: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public calculateMaxEarnings(students: Student[], maxHours: number): MaxEarningsOutput {
    students.sort((a: Student, b: Student) => (b.potential / b.hours) - (a.potential / a.hours));

    let hours = 0;
    let potential = 0;
    let acceptedStudents: string[] = [];

    for (const student of students) {
      if (hours + student.hours <= maxHours) {
        acceptedStudents = [ ...acceptedStudents, student.name ];
        hours += student.hours;
        potential += student.potential;
      }
    }

    return {
      acceptedStudents,
      potential,
    };
  }
}
