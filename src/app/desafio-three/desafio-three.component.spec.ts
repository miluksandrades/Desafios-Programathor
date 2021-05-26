import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioThreeComponent } from './desafio-three.component';

describe('DesafioThreeComponent', () => {
  let component: DesafioThreeComponent;
  let fixture: ComponentFixture<DesafioThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesafioThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafioThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
