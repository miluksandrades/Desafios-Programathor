import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasPagasListComponent } from './contas-pagas-list.component';

describe('ContasPagasListComponent', () => {
  let component: ContasPagasListComponent;
  let fixture: ComponentFixture<ContasPagasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasPagasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasPagasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
