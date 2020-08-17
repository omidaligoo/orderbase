import { Injectable } from '@angular/core';
import { ProductEnd } from '../../endpoint/product/product-end';
import { Product } from '../../model/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private productEnd:ProductEnd) { }

  createNewProduct (product:Product) {
    return this.productEnd.createNewProduct(product);
  }

  getProductListWithUserIdPageable( pageable){
    return this.productEnd.getProductListWithUserIdPageable(pageable);
  }

  getProductListWithMainCategoryPageable(mainCategoryId:string,pageable){
    return this.productEnd.getProductListWithMainCategoryPageable(mainCategoryId,pageable);
  }

  getAllProductListPageable( pageable){
    return this.productEnd.getAllProductListPageable(pageable);
  }
}
