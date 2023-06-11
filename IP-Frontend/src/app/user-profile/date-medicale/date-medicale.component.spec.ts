/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DateMedicaleComponent } from './date-medicale.component';

describe('DateMedicaleComponent', () => {
  let component: DateMedicaleComponent;
  let fixture: ComponentFixture<DateMedicaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateMedicaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateMedicaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
