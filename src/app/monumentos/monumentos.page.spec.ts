import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { MonumentosPage } from './monumentos.page';

describe('MonumentosPage', () => {
  let component: MonumentosPage;
  let fixture: ComponentFixture<MonumentosPage>;
  let monumentosPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonumentosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(MonumentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    monumentosPage = fixture.nativeElement;
    const items = monumentosPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
