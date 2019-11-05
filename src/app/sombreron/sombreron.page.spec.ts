import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SombreronPage } from './sombreron.page';

describe('SombreronPage', () => {
  let component: SombreronPage;
  let fixture: ComponentFixture<SombreronPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SombreronPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SombreronPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
