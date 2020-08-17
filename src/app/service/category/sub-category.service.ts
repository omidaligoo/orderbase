import { Injectable } from '@angular/core';
import {SubCategoryEnd} from '../../endpoint/category/sub-category-end';
import {SubCategory} from '../../model/category/sub-category';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private subCategoryEnd:SubCategoryEnd) { }

  createNewSubCategory (subCategory:SubCategory) {
    return this.subCategoryEnd.createNewSubCategory(subCategory);
   }

   getTrueStatusList () {
    return this.subCategoryEnd.getTrueStatusList();
   }

   getList () {
    return this.subCategoryEnd.getList();
   }

   getOne (subCatgoryId:string) {
    return this.subCategoryEnd.getOne(subCatgoryId);
   }

   getSubCategoryListMainCategoryId(mainCatgoryId:string){
     return this.subCategoryEnd.getSubCategoryListMainCategoryId(mainCatgoryId);
   }

   changeSubCategoryStatus(subCategoryId:string,status:boolean){
    return this.subCategoryEnd.changeSubCategoryStatus(subCategoryId,status);
  }
}
