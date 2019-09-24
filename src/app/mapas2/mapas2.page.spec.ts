import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mapas2Page } from './mapas2.page';

describe('Mapas2Page', () => {
  let component: Mapas2Page;
  let fixture: ComponentFixture<Mapas2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mapas2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mapas2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
