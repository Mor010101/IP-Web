/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DateVitaleComponent } from './date-vitale.component';

describe('DateVitaleComponent', () => {
  let component: DateVitaleComponent;
  let fixture: ComponentFixture<DateVitaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateVitaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateVitaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
