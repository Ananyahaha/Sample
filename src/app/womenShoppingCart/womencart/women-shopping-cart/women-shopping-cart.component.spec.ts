import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenShoppingCartComponent } from './women-shopping-cart.component';

describe('WomenShoppingCartComponent', () => {
  let component: WomenShoppingCartComponent;
  let fixture: ComponentFixture<WomenShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenShoppingCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
