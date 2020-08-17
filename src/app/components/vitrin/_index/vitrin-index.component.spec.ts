import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitrinIndexComponent } from './vitrin-index.component';

describe('VitrinIndexComponent', () => {
  let component: VitrinIndexComponent;
  let fixture: ComponentFixture<VitrinIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitrinIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitrinIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
