import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { MainCategoryService} from '../../../service/category/main-category.service';
import { MainCategory} from '../../../model/category/main-category';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vitrin-navigation',
  templateUrl: './vitrin-navigation.component.html',
  styleUrls: ['./vitrin-navigation.component.scss']
})
export class VitrinNavigationComponent implements OnInit {
  @Output()
  outMainCategory:EventEmitter<MainCategory>=new EventEmitter<MainCategory>();

  imagePath:string=environment.apiUrl+environment.originalImage;
  mainCategoryList:MainCategory[]=[];
  selectedMainCategory:MainCategory=new MainCategory();

  constructor(private mainCategoryService:MainCategoryService) { }

  ngOnInit(): void {
    console.log(this.imagePath)
    this.mainCategoryService.getList().subscribe((res: any) => {
      this.mainCategoryList=res.data;
      console.log(this.mainCategoryList);
    });
  }

  selecteMainCategory(mainCategory:MainCategory){
    console.log(mainCategory);
    this.selectedMainCategory=mainCategory;
    this.outMainCategory.emit(mainCategory);
  }
}
