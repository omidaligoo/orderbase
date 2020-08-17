import { Injectable } from '@angular/core';
import {AdvertisingEnd} from '../../endpoint/advertising/advertising-end';
import {Advertising} from '../../model/advertising/advertising';

@Injectable({
  providedIn: 'root'
})
export class AdvertisingService {

  constructor(private advertisingEnd:AdvertisingEnd) { }

  createNewAdvertising(advertising:Advertising) {

    return  this.advertisingEnd.createNewAdvertising(advertising);

  }
  getList(){
    return this.advertisingEnd.getList();
  }

  changeAdvertisingStatus(advertising:Advertising,status:boolean){
    return this.advertisingEnd.changeAdvertisingStatus(advertising.id,status);
  }
}
