import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { MitosyleyendasPage } from './mitosyleyendas.page';

describe('MitosyleyendasPage', () => {
  let component: MitosyleyendasPage;
  let fixture: ComponentFixture<MitosyleyendasPage>;
  let mitosyleyendasPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitosyleyendasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(MitosyleyendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    mitosyleyendasPage = fixture.nativeElement;
    const items = mitosyleyendasPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
