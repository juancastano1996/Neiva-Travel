import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaLloronaPage } from './la-llorona.page';

describe('LaLloronaPage', () => {
  let component: LaLloronaPage;
  let fixture: ComponentFixture<LaLloronaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaLloronaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaLloronaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
