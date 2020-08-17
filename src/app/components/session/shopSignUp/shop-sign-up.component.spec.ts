import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSignUpComponent } from './shop-sign-up.component';

describe('ShopSignUpComponent', () => {
  let component: ShopSignUpComponent;
  let fixture: ComponentFixture<ShopSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
