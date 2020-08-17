import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { User} from '../../model/user/user';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserEnd {
  constructor(private httpClient: HttpClient) {}

  createCompany(user:User){
    return this.httpClient.post( environment.apiUrl +'/UAA/api/user/create-new-company/admin/ver1' , user)
    .pipe(map(res => res));
  }

  createShop(user:User){
    return this.httpClient.post( environment.apiUrl +'/UAA/api/user/create-new-shop/ver1' , user)
    .pipe(map(res => res));
  }

  sendSmsToken(phone:string){
    return this.httpClient.get( environment.apiUrl +'/UAA/api/user/send-sms-token/ver1?mobile=' + phone)
    .pipe(map(res => res));
  }

  verifyMobile(phone:string,token:string){
    return this.httpClient.get( environment.apiUrl +'/UAA/api/user/verify-mobile/ver1?mobile=' + phone+'&token='+ token)
    .pipe(map(res => res));
  }

  signin(username:string,password:string) {


    const body = new URLSearchParams()
    body.set('grant_type', 'password');
    body.set('username', username);
    body.set('password', password);



    var header = {
        headers: new HttpHeaders()
          .set('Authorization' , 'Basic ' + btoa('SAMA_LIVE_PROJECT' + ':' + 'SAMA_LIVE_PROJECT_SECRET'))
          .set('Content-Type', 'application/x-www-form-urlencoded')
        }



    return this.httpClient.post(environment.apiUrl + '/UAA/oauth/token', body.toString(), header)

  }


}
