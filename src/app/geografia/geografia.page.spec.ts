import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeografiaPage } from './geografia.page';

describe('GeografiaPage', () => {
  let component: GeografiaPage;
  let fixture: ComponentFixture<GeografiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeografiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeografiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
