import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionComponent} from './_index/session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopSignUpComponent} from './shopSignUp/shop-sign-up.component';
import { HttpClientModule} from '@angular/common/http';
import { SessionRoutingModule } from './session-routing.module';
import { SignInComponent } from './signIn/sign-in.component';


@NgModule({
  declarations: [
    SessionComponent,
    ShopSignUpComponent,
    SignInComponent],

  imports: [
    CommonModule,
    SessionRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class SessionModule { }
