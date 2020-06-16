/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChervonComponent } from './chervon.component';

describe('ChervonComponent', () => {
  let component: ChervonComponent;
  let fixture: ComponentFixture<ChervonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChervonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChervonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
