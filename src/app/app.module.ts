import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { StoreModule} from './components/store/store.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToknenInterceptorService } from './base/auth/toknen-interceptor.service';







@NgModule({
  declarations: [
    AppComponent,

   








  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    StoreModule

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ToknenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
