import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionBComponent } from './expression-b.component';

describe('ExpressionBComponent', () => {
  let component: ExpressionBComponent;
  let fixture: ComponentFixture<ExpressionBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpressionBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressionBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
