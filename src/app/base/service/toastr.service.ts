import { Injectable } from '@angular/core';
declare var toastr:any
@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  KnowFlag(flag:boolean){
    if (flag == true){
      this.Success("ثبت","ثبت با موفقیت انجام شد");
    }else{
      this.Error("ثبت","مشکلی در ثبت به وجود آمد")
    }
  }

  Success(title:string,meassage?:string){
    toastr.success(title,meassage);
  }

  Error(title:string,meassage?:string){
    toastr.error(title,meassage);
  }

  Warning(title:string,meassage?:string){
    toastr.warning(title,meassage);
  }
}
