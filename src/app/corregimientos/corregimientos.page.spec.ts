import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorregimientosPage } from './corregimientos.page';

describe('CorregimientosPage', () => {
  let component: CorregimientosPage;
  let fixture: ComponentFixture<CorregimientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorregimientosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorregimientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
