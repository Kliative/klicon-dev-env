/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AaFRainComponent } from './aa-f-rain.component';

describe('AaFRainComponent', () => {
  let component: AaFRainComponent;
  let fixture: ComponentFixture<AaFRainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaFRainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaFRainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
