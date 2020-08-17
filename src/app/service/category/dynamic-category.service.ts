import { Injectable } from '@angular/core';
import {MainCategoryEnd} from '../../endpoint/category/main-category-end';
import {MainCategory} from '../../model/category/main-category';

@Injectable({
  providedIn: 'root'
})
export class DynamicCategoryService {

  constructor(private mainCategoryEnd:MainCategoryEnd) { }



}
