import { Component, OnInit ,Input } from '@angular/core';
import { MainCategory} from '../../../model/category/main-category';
import { SubCategory} from '../../../model/category/sub-category';
import { SubCategoryService} from '../../../service/category/sub-category.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vitrin-aside',
  templateUrl: './vitrin-aside.component.html',
  styleUrls: ['./vitrin-aside.component.scss']
})
export class VitrinAsideComponent implements OnInit {

  @Input() selectedMainCategory:MainCategory;
  selectedMainCategoryEnd:MainCategory=new MainCategory();
  subCategoryList:SubCategory[]=[];
  imagePath:string=environment.apiUrl+environment.originalImage;
  constructor(private subCategoryService:SubCategoryService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any) {
    console.log(changes.selectedMainCategory.currentValue);
    this.selectedMainCategoryEnd=changes.selectedMainCategory.currentValue;
    this.subCategoryService.getSubCategoryListMainCategoryId(this.selectedMainCategoryEnd.id).subscribe((res: any) => {
      this.subCategoryList=res.data;
      console.log(this.subCategoryList);
    });
  }

}
