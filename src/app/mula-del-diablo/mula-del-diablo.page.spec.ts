import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulaDelDiabloPage } from './mula-del-diablo.page';

describe('MulaDelDiabloPage', () => {
  let component: MulaDelDiabloPage;
  let fixture: ComponentFixture<MulaDelDiabloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulaDelDiabloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulaDelDiabloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
