import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideShowListComponent } from './slide-show-list.component';

describe('SlideShowListComponent', () => {
  let component: SlideShowListComponent;
  let fixture: ComponentFixture<SlideShowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideShowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideShowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
