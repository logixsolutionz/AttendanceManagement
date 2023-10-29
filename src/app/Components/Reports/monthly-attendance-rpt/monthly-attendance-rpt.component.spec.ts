import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyAttendanceRptComponent } from './monthly-attendance-rpt.component';

describe('MonthlyAttendanceRptComponent', () => {
  let component: MonthlyAttendanceRptComponent;
  let fixture: ComponentFixture<MonthlyAttendanceRptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyAttendanceRptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyAttendanceRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
