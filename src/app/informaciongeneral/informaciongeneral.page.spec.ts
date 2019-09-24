import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { InformaciongeneralPage } from './informaciongeneral.page';

describe('InformaciongeneralPage', () => {
  let component: InformaciongeneralPage;
  let fixture: ComponentFixture<InformaciongeneralPage>;
  let informaciongeneralPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformaciongeneralPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(InformaciongeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    informaciongeneralPage = fixture.nativeElement;
    const items = informaciongeneralPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
