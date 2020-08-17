import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCategoryCreateComponent } from './main-category-create.component';

describe('MainCategoryCreateComponent', () => {
  let component: MainCategoryCreateComponent;
  let fixture: ComponentFixture<MainCategoryCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCategoryCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
