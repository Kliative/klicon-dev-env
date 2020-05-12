/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MiFormComponent } from './mi-form.component';

describe('MiFormComponent', () => {
  let component: MiFormComponent;
  let fixture: ComponentFixture<MiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
