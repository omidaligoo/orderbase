import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreateCityComponent } from '../basicInformation/city/action/create/create-city.component';
import { CompanyCreateComponent } from '../user/user/companyCreate/company-create.component';
import { RouterModule } from '@angular/router';
import { CityListComponent } from '../basicInformation/city/_index/city-list.component';
import {AdvertisingListComponent} from '../advertising/advertising/_index/advertising-list.component';
import {AdvertisingCreateComponent} from '../advertising/advertising/action/create/advertising-create.component';
import {JobCategoryListComponent} from '../category/jobCategory/_index/job-category-list.component';
import {JobCategoryCreateComponent} from '../category/jobCategory/action/create/job-category-create.component';
import {MainCategoryListComponent} from '../category/mainCategory/_index/main-category-list.component';
import {MainCategoryCreateComponent} from '../category/mainCategory/action/create/main-category-create.component';
import {SubCategoryListComponent} from '../category/subCategory/_index/sub-category-list.component';
import {SubCategoryCreateComponent} from '../category/subCategory/action/create/sub-category-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {HttpClientModule} from '@angular/common/http';
import {SlideShowCreateComponent} from '../advertising/slideShow/action/create/slide-show-create.component';
import {SlideShowListComponent} from '../advertising/slideShow/_index/slide-show-list.component';

@NgModule({
  declarations: [
     HeaderComponent,
     DashboardComponent,
     SidebarComponent,
     CompanyCreateComponent,
     CreateCityComponent,
     CityListComponent,
     AdvertisingListComponent,
     AdvertisingCreateComponent,
     JobCategoryListComponent,
     JobCategoryCreateComponent,
     MainCategoryListComponent,
     MainCategoryCreateComponent,
     SubCategoryListComponent,
     SubCategoryCreateComponent,
     SlideShowCreateComponent,
     SlideShowListComponent
    ],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule.forRoot(),
    DashboardRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ]
})
export class DashboardModule { }
