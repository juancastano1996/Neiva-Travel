import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunasPage } from './comunas.page';

describe('ComunasPage', () => {
  let component: ComunasPage;
  let fixture: ComponentFixture<ComunasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
