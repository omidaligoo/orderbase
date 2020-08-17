import { Component, OnInit } from '@angular/core';
import {JobCategory } from '../../../../../model/category/job-category';
import {JobCategoryService } from '../../../../../service/category/job-category.service';

@Component({
  selector: 'app-job-category-create',
  templateUrl: './job-category-create.component.html',
  styleUrls: ['./job-category-create.component.scss']
})
export class JobCategoryCreateComponent implements OnInit {
  jobCategory: JobCategory = new JobCategory();
  newJobCategory: JobCategory = new JobCategory();

  constructor(public  jobCategoryService:JobCategoryService) { }

  ngOnInit(): void {
  }

  submitForm(){
    this.jobCategoryService.create(this.jobCategory).subscribe((res: any) => {
      console.log(res);
      this.newJobCategory=res.data;
    });
    console.log(this.jobCategory);

  }
}
