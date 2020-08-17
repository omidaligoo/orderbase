import { Injectable } from '@angular/core';
import { User} from '../../model/user/user';
import { UserEnd} from '../../endpoint/user/user-end';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userEnd:UserEnd) { }

  createCompany(user:User){
    console.log(user);
    return this.userEnd.createCompany(user);
  }

  createShop(user:User){
    console.log(user);
    return this.userEnd.createShop(user);
  }

  sendSmsToken(phone:string){
    return this.userEnd.sendSmsToken(phone);
  }

  verifyMobile(phone:string,token:string){
    return this.userEnd.verifyMobile(phone,token);
  }

  signin(username:string,password:string) {
    return this.userEnd.signin(username,password);
  }

  getToken(){

    return localStorage.getItem('token');
  }

  getOperatorFirstName(){
    return localStorage.getItem('operatorFristName');
  }

  getOperatorLastName(){
    return localStorage.getItem('operatorLastName');
  }
}
