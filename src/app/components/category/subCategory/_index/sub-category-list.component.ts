import { Component, OnInit, Input } from '@angular/core';
import {SubCategory} from '../../../../model/category/sub-category';
import {SubCategoryService} from '../../../../service/category/sub-category.service';
import {ToastrService} from '../../../../base/service/toastr.service';

@Component({
  selector: 'app-sub-category-list',
  templateUrl: './sub-category-list.component.html',
  styleUrls: ['./sub-category-list.component.scss']
})
export class SubCategoryListComponent implements OnInit {
  @Input() newSubCategory:SubCategory;
  subCategoryList:SubCategory[]=[];
  constructor(private subCategoryService:SubCategoryService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.subCategoryService.getList().subscribe((res: any) => {
      this.subCategoryList=res.data;
      console.log(this.subCategoryList);
    });
  }

  ngOnChanges(changes: any) {
    this.subCategoryList.push(changes.newMainCategory.currentValue);
  }

  setOneStatusTrue(subCategory:SubCategory){
    console.log(subCategory);
    this.subCategoryService.changeSubCategoryStatus(subCategory.id,true).subscribe((res: any) => {

      console.log(res);
      this.toastrService.KnowFlag(res.data);
      for(let jc of this.subCategoryList){
          if(jc.id==subCategory.id){
            jc.status=true;
          }
      }

    });

  }

  setOneStatusFalse(subCategory:SubCategory){
    console.log(subCategory);
    this.subCategoryService.changeSubCategoryStatus(subCategory.id,false).subscribe((res: any) => {

      console.log(res);
      this.toastrService.KnowFlag(res.data);
      for(let jc of this.subCategoryList){
        if(jc.id==subCategory.id){
          jc.status=false;
        }
    }

    });
  }

}
