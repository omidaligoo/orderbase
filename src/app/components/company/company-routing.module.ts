import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyIndexComponent } from './_index/company-index.component';
import { ProductListComponent } from './productList/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyIndexComponent,
  },
  {
    path: 'productList',
    component: ProductListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
