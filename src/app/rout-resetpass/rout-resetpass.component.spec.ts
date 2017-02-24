/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoutResetpassComponent } from './rout-resetpass.component';

describe('RoutResetpassComponent', () => {
  let component: RoutResetpassComponent;
  let fixture: ComponentFixture<RoutResetpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutResetpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutResetpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
