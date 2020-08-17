import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitrinNavigationComponent } from './vitrin-navigation.component';

describe('VitrinNavigationComponent', () => {
  let component: VitrinNavigationComponent;
  let fixture: ComponentFixture<VitrinNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitrinNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitrinNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
