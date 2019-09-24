import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DichosyrefranesPage } from './dichosyrefranes.page';

describe('DichosyrefranesPage', () => {
  let component: DichosyrefranesPage;
  let fixture: ComponentFixture<DichosyrefranesPage>;
  let dichosyrefranesPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichosyrefranesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(DichosyrefranesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    dichosyrefranesPage = fixture.nativeElement;
    const items = dichosyrefranesPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
