import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParapentePage } from './parapente.page';

describe('ParapentePage', () => {
  let component: ParapentePage;
  let fixture: ComponentFixture<ParapentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParapentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParapentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
