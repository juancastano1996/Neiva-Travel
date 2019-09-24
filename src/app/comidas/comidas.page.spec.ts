import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ComidasPage } from './comidas.page';

describe('ComidasPage', () => {
  let component: ComidasPage;
  let fixture: ComponentFixture<ComidasPage>;
  let comidasPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(ComidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    comidasPage = fixture.nativeElement;
    const items = comidasPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
