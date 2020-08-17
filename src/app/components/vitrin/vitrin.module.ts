import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VitrinRoutingModule } from './vitrin-routing.module';
import { VitrinAsideComponent } from './aside/vitrin-aside.component';
import { VitrinNavigationComponent } from './navigation/vitrin-navigation.component';
import { VitrinIndexComponent } from './_index/vitrin-index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductListComponent } from './productList/product-list.component';
import { PersianPipesModule } from 'ngx-persian-pipe';


@NgModule({
  declarations: [
    VitrinAsideComponent,
    VitrinNavigationComponent,
    VitrinIndexComponent,
    ProductListComponent,
    


  ],
  imports: [
    CommonModule,
    VitrinRoutingModule,

    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    PersianPipesModule

  ]
})
export class VitrinModule { }
