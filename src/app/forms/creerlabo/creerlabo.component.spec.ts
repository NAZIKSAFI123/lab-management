import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerlaboComponent } from './creerlabo.component';

describe('CreerlaboComponent', () => {
  let component: CreerlaboComponent;
  let fixture: ComponentFixture<CreerlaboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerlaboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerlaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
