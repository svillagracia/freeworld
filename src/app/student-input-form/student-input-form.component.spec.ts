import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInputFormComponent } from './student-input-form.component';

describe('StudentInputFormComponent', () => {
  let component: StudentInputFormComponent;
  let fixture: ComponentFixture<StudentInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentInputFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
