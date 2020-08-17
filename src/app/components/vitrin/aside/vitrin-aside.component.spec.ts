import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitrinAsideComponent } from './vitrin-aside.component';

describe('VitrinAsideComponent', () => {
  let component: VitrinAsideComponent;
  let fixture: ComponentFixture<VitrinAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitrinAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitrinAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
