import { Component, OnInit } from '@angular/core';
import { MainCategory} from '../../../model/category/main-category';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

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
