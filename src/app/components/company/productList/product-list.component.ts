import { Component, OnInit } from '@angular/core';
import { Product } from '../../../model/product/product';
import { ProductService } from '../../../service/product/product.service';
import { Pageable } from '../../../base/general/pageable';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pageable:Pageable=new Pageable();
  imagePath:string=environment.apiUrl+environment.originalImage;
  productList:Product[]=[];
  pageCount:number;
  pageActive:string;
  items=[];

  constructor(private productService:ProductService) {
    this.pageable.pageNumber=0;
    this.pageable.pageSize=9;
   }

  ngOnInit(): void {
    this.getPageableList();
  }

  getPrevPage(){
    console.log(this.pageActive);
    this.pageable.pageNumber=this.pageable.pageNumber-1 ;
    this.getPageableList()
  }
  getCustomPage(item){
    console.log(item);
    this.pageable.pageNumber=Number(item.id)-1 ;
    this.getPageableList()
  }
  getNextPage(){
    console.log(this.pageActive);

    this.pageable.pageNumber=this.pageable.pageNumber+1 ;
    this.getPageableList()
  }

  getPageableList(){
    this.productService.getAllProductListPageable(this.pageable).subscribe((res: any) => {
      console.log(res);
      this.productList=res.data.content;
      this.pageCount=res.data.totalPages;
      console.log(this.pageCount);
      this.items = Array(this.pageCount).fill(0).map((x, i) => ({ id: (i + 1), name: `${i + 1}`}));
      this.pageActive=(res.data.number+1);
      console.log(this.items);
      console.log(this.pageActive);
    });
  }

}
