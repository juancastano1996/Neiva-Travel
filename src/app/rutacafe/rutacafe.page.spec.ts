import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutacafePage } from './rutacafe.page';

describe('RutacafePage', () => {
  let component: RutacafePage;
  let fixture: ComponentFixture<RutacafePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutacafePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutacafePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
