import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideShowCreateComponent } from './slide-show-create.component';

describe('SlideShowCreateComponent', () => {
  let component: SlideShowCreateComponent;
  let fixture: ComponentFixture<SlideShowCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideShowCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideShowCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
