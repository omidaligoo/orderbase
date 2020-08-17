import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCategoryListComponent } from './job-category-list.component';

describe('JobCategoryListComponent', () => {
  let component: JobCategoryListComponent;
  let fixture: ComponentFixture<JobCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
