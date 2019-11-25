import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TunjoDeOroPage } from './tunjo-de-oro.page';

describe('TunjoDeOroPage', () => {
  let component: TunjoDeOroPage;
  let fixture: ComponentFixture<TunjoDeOroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TunjoDeOroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TunjoDeOroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
