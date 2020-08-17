import { Component, OnInit } from '@angular/core';
import { MainCategory} from '../../../model/category/main-category';

@Component({
  selector: 'app-vitrin-index',
  templateUrl: './vitrin-index.component.html',
  styleUrls: ['./vitrin-index.component.scss']
})
export class VitrinIndexComponent implements OnInit {

  selectedMainCategory:MainCategory=new MainCategory();
  constructor() { }

  ngOnInit(): void {
  }

  parentMethod(mainCategory:MainCategory){
      this.selectedMainCategory=mainCategory;
      console.log("selectedMainCategory:")
      console.log(this.selectedMainCategory);
  }



}
