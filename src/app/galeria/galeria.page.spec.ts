import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { GaleriaPage } from './galeria.page';

describe('ComidasPage', () => {
  let component: GaleriaPage;
  let fixture: ComponentFixture<GaleriaPage>;
  let galeriaPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(GaleriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    galeriaPage = fixture.nativeElement;
    const items = galeriaPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
