import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCategoryListComponent } from './main-category-list.component';

describe('MainCategoryListComponent', () => {
  let component: MainCategoryListComponent;
  let fixture: ComponentFixture<MainCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
