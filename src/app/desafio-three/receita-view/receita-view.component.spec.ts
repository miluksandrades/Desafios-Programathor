import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaViewComponent } from './receita-view.component';

describe('ReceitaViewComponent', () => {
  let component: ReceitaViewComponent;
  let fixture: ComponentFixture<ReceitaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
