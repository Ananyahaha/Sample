import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomencartComponent } from './womencart.component';

describe('WomencartComponent', () => {
  let component: WomencartComponent;
  let fixture: ComponentFixture<WomencartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomencartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomencartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
