import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingCreateComponent } from './advertising-create.component';

describe('AdvertisingCreateComponent', () => {
  let component: AdvertisingCreateComponent;
  let fixture: ComponentFixture<AdvertisingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisingCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
