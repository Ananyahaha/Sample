import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsCartListComponent } from './kids-cart-list.component';

describe('KidsCartListComponent', () => {
  let component: KidsCartListComponent;
  let fixture: ComponentFixture<KidsCartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsCartListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsCartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
