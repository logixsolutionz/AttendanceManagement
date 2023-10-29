import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttRptTypeDatewiseComponent } from './att-rpt-type-datewise.component';

describe('AttRptTypeDatewiseComponent', () => {
  let component: AttRptTypeDatewiseComponent;
  let fixture: ComponentFixture<AttRptTypeDatewiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttRptTypeDatewiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttRptTypeDatewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
