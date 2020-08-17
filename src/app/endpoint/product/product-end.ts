import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../../model/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductEnd {
  constructor(private httpClient: HttpClient) {}

  createNewProduct (product:Product) {
    return this.httpClient.post( environment.apiUrl +'/UAA/api/product/create-new-product/ver1' , product)
    .pipe(map(res => res));
  }

  getProductListWithUserIdPageable( pageable){
    return this.httpClient.get( environment.apiUrl +'/UAA/api/product/get-product-list-with-user-id-pageable/ver1'+ '?page=' + pageable.pageNumber + '&size=' + pageable.pageSize +  '&sort=false' )
    .pipe(map(res => res));
  }

  getProductListWithMainCategoryPageable(mainCategoryId:string,pageable){
    return this.httpClient.get( environment.apiUrl +'/UAA/api/product/get-product-list-with-user-id-pageable/ver1'+ '?page=' + pageable.pageNumber + '&size=' + pageable.pageSize +  '&sort=false' )
    .pipe(map(res => res));
  }

  getAllProductListPageable( pageable){
    return this.httpClient.get( environment.apiUrl +'/UAA/api/product/get-product-list-all-category-pageable/ver1'+ '?page=' + pageable.pageNumber + '&size=' + pageable.pageSize +  '&sort=false' )
    .pipe(map(res => res));
  }

}
