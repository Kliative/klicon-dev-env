/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FeatherRainComponent } from './feather-rain.component';

describe('FeatherRainComponent', () => {
  let component: FeatherRainComponent;
  let fixture: ComponentFixture<FeatherRainComponent>;
  let el: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeatherRainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatherRainComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    component.strokeWidth = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Check if svg exist
  it('should exist', () => {
    expect(el.query(By.css('#rain-icon'))).toBeTruthy();
  });

  // Check if default onload class is applied
  it('should add onload css', () => {
    const svg = el.query(By.css('#rain-icon'));
    expect(svg.classes['ani-rain-onload']).toBeTruthy();
  });


  // check if animation hover is 'hover' then classList should contain .*-hover
  it('should add hover css', () => {
    component.animationAction = 'hover';
    const svg: HTMLElement = el.query(By.css('#rain-icon')).nativeElement;
    expect(svg.classList).toContain('ani-rain-onload');
  });

});
