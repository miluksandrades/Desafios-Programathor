import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioTwoComponent } from './desafio-two.component';

describe('DesafioTwoComponent', () => {
  let component: DesafioTwoComponent;
  let fixture: ComponentFixture<DesafioTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesafioTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafioTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
