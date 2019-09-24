import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapasDetallesPage } from './mapas-detalles.page';

describe('MapasDetallesPage', () => {
  let component: MapasDetallesPage;
  let fixture: ComponentFixture<MapasDetallesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapasDetallesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapasDetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
