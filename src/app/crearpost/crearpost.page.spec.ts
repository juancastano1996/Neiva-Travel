import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearpostPage } from './crearpost.page';

describe('CrearpostPage', () => {
  let component: CrearpostPage;
  let fixture: ComponentFixture<CrearpostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearpostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearpostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
