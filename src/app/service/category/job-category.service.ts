import { Injectable } from '@angular/core';
import { JobCategoryEnd } from '../../endpoint/category/job-category-end'
import { JobCategory} from '../../model/category/job-category';
@Injectable({
  providedIn: 'root'
})
export class JobCategoryService {

  constructor(private jobCategoryEnd:JobCategoryEnd) { }

  create (jobCategory:JobCategory) {
    return this.jobCategoryEnd.create(jobCategory);
   }

   getList () {
    return this.jobCategoryEnd.getList();
   }

   getTrueStatusList () {
    return this.jobCategoryEnd.getTrueStatusList();
   }

   changeJobCategoryStatus(jobCategory:JobCategory,status:boolean){
     return this.jobCategoryEnd.changeJobCategoryStatus(jobCategory.id,status)
   }
}


