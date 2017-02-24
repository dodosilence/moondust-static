/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PicViewerModalComponent } from './pic-viewer-modal.component';

describe('PicViewerModalComponent', () => {
  let component: PicViewerModalComponent;
  let fixture: ComponentFixture<PicViewerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicViewerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicViewerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
