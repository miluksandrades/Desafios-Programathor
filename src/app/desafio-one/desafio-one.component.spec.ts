import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioOneComponent } from './desafio-one.component';

describe('DesafioOneComponent', () => {
  let component: DesafioOneComponent;
  let fixture: ComponentFixture<DesafioOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesafioOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafioOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
