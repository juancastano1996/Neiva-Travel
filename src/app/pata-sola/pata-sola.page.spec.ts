import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PataSolaPage } from './pata-sola.page';

describe('PataSolaPage', () => {
  let component: PataSolaPage;
  let fixture: ComponentFixture<PataSolaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PataSolaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PataSolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
