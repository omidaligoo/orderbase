import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobCategory} from '../../model/category/job-category';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobCategoryEnd {
  constructor(private httpClient: HttpClient) {}

  create(jobCategory:JobCategory) {

    return this.httpClient.post( environment.apiUrl +'/UAA/api/jobCategory/create-new-job-category/admin/ver1' , jobCategory)
      .pipe(map(res => res));
  }

  getList() {

    return this.httpClient.get( environment.apiUrl +'/UAA/api/jobCategory/get-job-category-list/ver1' )
      .pipe(map(res => res));
  }

  getTrueStatusList() {

    return this.httpClient.get( environment.apiUrl +'/UAA/api/jobCategory/get-true-status-job-category-list/ver1' )
      .pipe(map(res => res));
  }

  changeJobCategoryStatus(jobCategoryId:string,status:boolean  ){
    return this.httpClient.get( environment.apiUrl +'/UAA/api/jobCategory/change-job-category-status/admin/ver1?jobCatgoryId='+jobCategoryId+'&status='+ status)
      .pipe(map(res => res));
  }
}


