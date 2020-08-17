import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreRoutingModule } from './store-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { StoreComponent } from './_index/store.component';
import { StoreHeaderComponent } from './header/store-header.component';
import { FooterComponent} from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AsideComponent } from './aside/aside.component';
import { VitrinModule } from '../vitrin/vitrin.module';
import { CompanyModule } from '../company/company.module';





@NgModule({
  declarations: [ StoreComponent,
     StoreHeaderComponent,
      FooterComponent,
      NavigationComponent,
      AsideComponent,

      ],

  imports: [
    CommonModule,
    StoreRoutingModule,

    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    VitrinModule,
    CompanyModule
  ]
})
export class StoreModule { }
