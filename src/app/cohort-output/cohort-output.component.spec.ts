import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CohortOutputComponent } from './cohort-output.component';

describe('CohortOutputComponent', () => {
  let component: CohortOutputComponent;
  let fixture: ComponentFixture<CohortOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CohortOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CohortOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
