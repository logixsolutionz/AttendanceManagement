import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttRptDailyComponent } from './att-rpt-daily.component';

describe('AttRptDailyComponent', () => {
  let component: AttRptDailyComponent;
  let fixture: ComponentFixture<AttRptDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttRptDailyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttRptDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
