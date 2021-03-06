/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClockMatComponent } from './clock.component';

describe('ClockMatComponent', () => {
  let component: ClockMatComponent;
  let fixture: ComponentFixture<ClockMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockMatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
