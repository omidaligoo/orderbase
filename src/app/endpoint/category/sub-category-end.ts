import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SubCategory } from '../../model/category/sub-category';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryEnd {
  constructor(private httpClient: HttpClient) {}

  createNewSubCategory (subCategory:SubCategory) {
    return this.httpClient.post( environment.apiUrl +'/UAA/api/subCategory/create-new-sub-category/admin/ver1' , subCategory)
    .pipe(map(res => res));
   }

   getTrueStatusList() {

    return this.httpClient.get( environment.apiUrl +'/UAA/api/subCategory/get-true-status-sub-category-list-/ver1' )
      .pipe(map(res => res));
  }

   getList() {

    return this.httpClient.get( environment.apiUrl +'/UAA/api/subCategory/get-sub-category-list/ver1' )
      .pipe(map(res => res));
  }

  getSubCategoryListMainCategoryId(mainCatgoryId:string){
    return this.httpClient.get( environment.apiUrl +'/UAA/api/subCategory/get-sub-category-list-main-category-id/ver1?mainCatgoryId='+mainCatgoryId )
    .pipe(map(res => res));
  }

  getOne (subCatgoryId:string) {
    return this.httpClient.get( environment.apiUrl +'/UAA/api/subCategory/get-sub-category-sub-category-id/shop/ver1?subCatgoryId='+subCatgoryId )
    .pipe(map(res => res));
  }

  changeSubCategoryStatus(subCategoryId:string,status:boolean) {

    return this.httpClient.get( environment.apiUrl +'/UAA/api/subCategory/change-sub-category-status/admin/ver1?subCatgoryId='+subCategoryId+'&status='+status)
      .pipe(map(res => res));
  }


}
