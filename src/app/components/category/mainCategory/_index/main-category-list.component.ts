import { Component, OnInit, Input } from '@angular/core';
import { MainCategory} from '../../../../model/category/main-category';
import { MainCategoryService} from '../../../../service/category/main-category.service';

@Component({
  selector: 'app-main-category-list',
  templateUrl: './main-category-list.component.html',
  styleUrls: ['./main-category-list.component.scss']
})
export class MainCategoryListComponent implements OnInit {

  @Input() newMainCategory:MainCategory;
  mainCategoryList:MainCategory[]=[];
  constructor(private mainCategoryService:MainCategoryService) { }

  ngOnInit(): void {
    this.mainCategoryService.getList().subscribe((res: any) => {
      this.mainCategoryList=res.data;
      console.log(this.mainCategoryList);
    });
  }

  ngOnChanges(changes: any) {
    this.mainCategoryList.push(changes.newMainCategory.currentValue);
  }

  setOneStatusTrue(mainCategory:MainCategory){
    console.log(mainCategory);
    this.mainCategoryService.changeMainCategoryStatus(mainCategory.id,true).subscribe((res: any) => {

      console.log(res);
      for(let jc of this.mainCategoryList){
          if(jc.id==mainCategory.id){
            jc.status=true;
          }
      }

    });

  }

  setOneStatusFalse(mainCategory:MainCategory){
    console.log(mainCategory);
    this.mainCategoryService.changeMainCategoryStatus(mainCategory.id,false).subscribe((res: any) => {

      console.log(res);
      for(let jc of this.mainCategoryList){
        if(jc.id==mainCategory.id){
          jc.status=false;
        }
    }

    });
  }

}
