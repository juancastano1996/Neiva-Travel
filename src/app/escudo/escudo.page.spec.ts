import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscudoPage } from './escudo.page';

describe('EscudoPage', () => {
  let component: EscudoPage;
  let fixture: ComponentFixture<EscudoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscudoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscudoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
