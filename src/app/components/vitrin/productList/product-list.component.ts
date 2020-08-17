import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Product} from '../../../model/product/product';
import { ProductService} from '../../../service/product/product.service';
import { Pageable} from '../../../base/general/pageable';
import { environment } from 'src/environments/environment';
import { FaNumPipe} from 'ngx-persian';
import { ToastrService} from '../../../base/service/toastr.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pageable:Pageable=new Pageable();
  imagePath:string=environment.apiUrl+environment.originalImage;
  productList:Product[]=[];
  pageProductList:Product[]=[];
  pageCount:number;
  pageActive:string;
  items=[];

  constructor(private productService:ProductService,private toastrservice:ToastrService) {
    this.pageable.pageNumber=0;
    this.pageable.pageSize=6;
   }

  ngOnInit(): void {
    this.getPageableList();
  }

  getPageableList(){
    this.productService.getProductListWithUserIdPageable(this.pageable).subscribe((res: any) => {
      console.log(res);
      this.pageProductList=res.data.content;
      this.pageProductList.forEach(obj => {
        this.productList.push(obj)
      });
      this.pageCount=res.data.totalPages;
      console.log(this.pageCount);
      this.items = Array(this.pageCount).fill(0).map((x, i) => ({ id: (i + 1), name: `${i + 1}`}));
      this.pageActive=(res.data.number+1);
      console.log(this.items);
      console.log(this.pageActive);
    });
  }

  pageableClick(){
    console.log("omid");
    if (this.pageable.pageNumber < this.pageCount){
      this.pageable.pageNumber=this.pageable.pageNumber+1;
      this.getPageableList();
    }else{
      this.toastrservice.Error("تمام!","کالا های این بخش تمام شد");
    }

  }

}
