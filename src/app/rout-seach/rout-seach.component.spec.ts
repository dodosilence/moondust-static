/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoutSeachComponent } from './rout-seach.component';

describe('RoutSeachComponent', () => {
  let component: RoutSeachComponent;
  let fixture: ComponentFixture<RoutSeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutSeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutSeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
