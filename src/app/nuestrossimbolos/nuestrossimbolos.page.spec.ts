import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { NuestrossimbolosPage } from './nuestrossimbolos.page';

describe('NuestrossimbolosPage', () => {
  let component: NuestrossimbolosPage;
  let fixture: ComponentFixture<NuestrossimbolosPage>;
  let nuestrossimbolosPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuestrossimbolosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(NuestrossimbolosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    nuestrossimbolosPage = fixture.nativeElement;
    const items = nuestrossimbolosPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
