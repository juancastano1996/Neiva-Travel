import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanderaPage } from './bandera.page';

describe('BanderaPage', () => {
  let component: BanderaPage;
  let fixture: ComponentFixture<BanderaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanderaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanderaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
