import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenCartItemComponent } from './women-cart-item.component';

describe('WomenCartItemComponent', () => {
  let component: WomenCartItemComponent;
  let fixture: ComponentFixture<WomenCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenCartItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
