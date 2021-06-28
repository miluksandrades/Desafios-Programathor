import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioFourComponent } from './desafio-four.component';

describe('DesafioFourComponent', () => {
  let component: DesafioFourComponent;
  let fixture: ComponentFixture<DesafioFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesafioFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafioFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
