import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitesmunicipioPage } from './limitesmunicipio.page';

describe('LimitesmunicipioPage', () => {
  let component: LimitesmunicipioPage;
  let fixture: ComponentFixture<LimitesmunicipioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitesmunicipioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitesmunicipioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
