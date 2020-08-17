import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyIndexComponent } from './_index/company-index.component';
import { ProductCreateComponent } from './productCreate/product-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './productList/product-list.component';


@NgModule({
  declarations: [
    CompanyIndexComponent,
    ProductCreateComponent,
    ProductListComponent,

  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class CompanyModule { }
