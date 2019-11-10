import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutacacaoPage } from './rutacacao.page';

describe('RutacacaoPage', () => {
  let component: RutacacaoPage;
  let fixture: ComponentFixture<RutacacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutacacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutacacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
