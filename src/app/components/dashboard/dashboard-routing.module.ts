import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import {CompanyCreateComponent } from '../user/user/companyCreate/company-create.component';
import { CreateCityComponent } from '../basicInformation/city/action/create/create-city.component';
import { AdvertisingCreateComponent } from '../advertising/advertising/action/create/advertising-create.component';
import { JobCategoryCreateComponent } from '../category/jobCategory/action/create/job-category-create.component';
import { MainCategoryCreateComponent } from '../category/mainCategory/action/create/main-category-create.component';
import { SubCategoryCreateComponent } from '../category/subCategory/action/create/sub-category-create.component';
import { SlideShowCreateComponent } from '../advertising/slideShow/action/create/slide-show-create.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path:'dashboard/create',
        component:CompanyCreateComponent
      },
      {
        path:'dashboard/create-city',
        component:CreateCityComponent
      },
      {
        path:'dashboard/create-advertising',
        component:AdvertisingCreateComponent
      },
      {
        path:'dashboard/create-slide-show',
        component:SlideShowCreateComponent
      },
      {
        path:'dashboard/create-job-category',
        component:JobCategoryCreateComponent
      },
      {
        path:'dashboard/create-main-category',
        component:MainCategoryCreateComponent
      },
      {
        path:'dashboard/create-sub-category',
        component:SubCategoryCreateComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
