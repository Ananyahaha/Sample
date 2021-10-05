import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidShoppingCartComponent } from './kid-shopping-cart.component';

describe('KidShoppingCartComponent', () => {
  let component: KidShoppingCartComponent;
  let fixture: ComponentFixture<KidShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidShoppingCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
