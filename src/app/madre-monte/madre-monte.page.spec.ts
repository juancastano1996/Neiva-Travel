import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadreMontePage } from './madre-monte.page';

describe('MadreMontePage', () => {
  let component: MadreMontePage;
  let fixture: ComponentFixture<MadreMontePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadreMontePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadreMontePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
