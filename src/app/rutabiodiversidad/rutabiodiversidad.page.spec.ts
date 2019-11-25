import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutabiodiversidadPage } from './rutabiodiversidad.page';

describe('RutabiodiversidadPage', () => {
  let component: RutabiodiversidadPage;
  let fixture: ComponentFixture<RutabiodiversidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutabiodiversidadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutabiodiversidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
