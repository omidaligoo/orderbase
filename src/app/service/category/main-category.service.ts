import { Injectable } from '@angular/core';
import {MainCategoryEnd} from '../../endpoint/category/main-category-end';
import {MainCategory} from '../../model/category/main-category';
@Injectable({
  providedIn: 'root'
})
export class MainCategoryService {

  constructor(private mainCategoryEnd:MainCategoryEnd) { }

  
   createNewMainCategory (mainCategory:MainCategory) {
    return this.mainCategoryEnd.createNewMainCategory(mainCategory);
   }

   getList () {
    return this.mainCategoryEnd.getList();
   }
   getListWithJobCategory () {
    return this.mainCategoryEnd.getListWithJobCategory();
   }

   getOne (mainCatgoryId:string) {
    return this.mainCategoryEnd.getOne(mainCatgoryId);
   }

   getTrueStatusList () {
    return this.mainCategoryEnd.getTrueStatusList();
   }

   changeMainCategoryStatus(mainCategoryId:string,status:boolean){
     return this.mainCategoryEnd.changeMainCategoryStatus(mainCategoryId,status);
   }
}
