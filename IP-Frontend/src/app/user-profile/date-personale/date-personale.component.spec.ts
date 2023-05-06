/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DatePersonaleComponent } from './date-personale.component';

describe('DatePersonaleComponent', () => {
  let component: DatePersonaleComponent;
  let fixture: ComponentFixture<DatePersonaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePersonaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePersonaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
