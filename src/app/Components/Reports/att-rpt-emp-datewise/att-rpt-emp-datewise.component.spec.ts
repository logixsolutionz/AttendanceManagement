import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttRptEmpDatewiseComponent } from './att-rpt-emp-datewise.component';

describe('AttRptEmpDatewiseComponent', () => {
  let component: AttRptEmpDatewiseComponent;
  let fixture: ComponentFixture<AttRptEmpDatewiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttRptEmpDatewiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttRptEmpDatewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
