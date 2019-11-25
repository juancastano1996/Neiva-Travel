import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MohanPage } from './mohan.page';

describe('MohanPage', () => {
  let component: MohanPage;
  let fixture: ComponentFixture<MohanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MohanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MohanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
