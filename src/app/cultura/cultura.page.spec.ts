import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CulturaPage } from "./CulturaPage";

describe('CulturaPage', () => {
  let component: CulturaPage;
  let fixture: ComponentFixture<CulturaPage>;
  let culturaPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(CulturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    culturaPage = fixture.nativeElement;
    const items = culturaPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
