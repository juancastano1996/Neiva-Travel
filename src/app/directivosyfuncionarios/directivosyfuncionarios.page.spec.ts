import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DirectivosyfuncionariosPage } from './directivosyfuncionarios.page';

describe('DirectivosyfuncionariosPage', () => {
  let component: DirectivosyfuncionariosPage;
  let fixture: ComponentFixture<DirectivosyfuncionariosPage>;
  let directivosyfuncionariosPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivosyfuncionariosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(DirectivosyfuncionariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    directivosyfuncionariosPage = fixture.nativeElement;
    const items = directivosyfuncionariosPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
