import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInformationRoutingModule } from './basic-information-routing.module';
import { CityListComponent } from './city/_index/city-list/city-list.component';


@NgModule({
  declarations: [CityListComponent],
  imports: [
    CommonModule,
    BasicInformationRoutingModule
  ]
})
export class BasicInformationModule { }
