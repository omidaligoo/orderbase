import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserService } from '../../service/user/user.service'


@Injectable({
  providedIn: 'root'
})
export class ToknenInterceptorService implements HttpInterceptor{

  urlsToNotUse: Array<string>;

  constructor(private injector:Injector) {
    this.urlsToNotUse= [
      '/jobCategory/get-job-category-list/ver1',
      '/user/create-new-shop/ver1',
      '/user/send-sms-token/ver1',
      '/user/verify-mobile/ver1',
      '/UAA/oauth/token',
      '/city/get-city-list/ver1'

    ];
   }

  intercept(request,next){

    if (this.isValidRequestForInterceptor(request.url)) {
      let userService= this.injector.get(UserService);
        let tokenizedRequest = request.clone({
          setHeaders:{
            Authorization: `Bearer ${userService.getToken()}`
          }
        })
      return next.handle(tokenizedRequest);
    }

    return next.handle(request);

  }

  private isValidRequestForInterceptor(requestUrl: string): boolean {


      for (let address of this.urlsToNotUse) {
        if (requestUrl.search(address) > -1) {
          return false;
        }
      }

    return true;
  }
}
