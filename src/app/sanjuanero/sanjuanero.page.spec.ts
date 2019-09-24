import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SanjuaneroPage } from './sanjuanero.page';

describe('SanjuaneroPage', () => {
  let component: SanjuaneroPage;
  let fixture: ComponentFixture<SanjuaneroPage>;
  let sanjuaneroPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanjuaneroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(SanjuaneroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    sanjuaneroPage = fixture.nativeElement;
    const items = sanjuaneroPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
