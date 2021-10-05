import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsCartItemComponent } from './kids-cart-item.component';

describe('KidsCartItemComponent', () => {
  let component: KidsCartItemComponent;
  let fixture: ComponentFixture<KidsCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsCartItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
