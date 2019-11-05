import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaachiraPage } from './rutaachira.page';

describe('RutaachiraPage', () => {
  let component: RutaachiraPage;
  let fixture: ComponentFixture<RutaachiraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaachiraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaachiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
