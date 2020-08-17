import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {MainCategory} from '../../model/category/main-category';
@Injectable({
  providedIn: 'root'
})
export class MainCategoryEnd {
  constructor(private httpClient: HttpClient) {}

  createNewMainCategory(mainCategory:MainCategory) {

    return this.httpClient.post( environment.apiUrl +'/UAA/api/mainCategory/create-new-main-category/admin/ver1' , mainCategory)
      .pipe(map(res => res));
  }

  getList() {

    return this.httpClient.get( environment.apiUrl +'/UAA/api/mainCategory/get-main-category-list/ver1' )
      .pipe(map(res => res));
  }

  getListWithJobCategory() {

    return this.httpClient.get( environment.apiUrl +'/UAA/api/mainCategory/get-main-category-list/ver1' )
      .pipe(map(res => res));
  }

  getTrueStatusList() {

    return this.httpClient.get( environment.apiUrl +'/UAA/api/mainCategory/get-true-status-main-category-list/ver1' )
      .pipe(map(res => res));
  }

  changeMainCategoryStatus(mainCategoryId:string,status:boolean) {

    return this.httpClient.get( environment.apiUrl +'/UAA/api/mainCategory/change-mainCategory-status/admin/ver1?mainCategoryId='+mainCategoryId+'&status='+status)
      .pipe(map(res => res));
  }

  getOne (mainCatgoryId:string) {
    return this.httpClient.get( environment.apiUrl +'/UAA/api/mainCategory/get-main-category-main-category-id/shop/ver1?mainCatgoryId='+mainCatgoryId )
    .pipe(map(res => res));
   }
}
