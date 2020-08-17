import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advertising} from '../../model/advertising/advertising';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdvertisingEnd {
  constructor(private httpClient: HttpClient) {}

  createNewAdvertising(advertising:Advertising) {

    return this.httpClient.post( environment.apiUrl +'/UAA/api/advertising/create-new-advertising/admin/ver1' , advertising)
      .pipe(map(res => res));
  }

  getList(){
    return this.httpClient.get( environment.apiUrl + '/UAA/api/advertising/get-advertising-list/ver1')
  }

  changeAdvertisingStatus(advertisingId:string,status:boolean){
    return this.httpClient.get( environment.apiUrl + '/UAA/api/advertising/change-advertising-status/admin/ver1?advertisingId='+advertisingId+'&status='+status);
  }

}
