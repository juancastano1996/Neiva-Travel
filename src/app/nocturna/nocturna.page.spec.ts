import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { NocturnaPage } from './nocturna.page';

describe('NocturnaPage', () => {
  let component: NocturnaPage;
  let fixture: ComponentFixture<NocturnaPage>;
  let nocturnaPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NocturnaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(NocturnaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    nocturnaPage = fixture.nativeElement;
    const items = nocturnaPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
