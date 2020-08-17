import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {City} from '../../model/basicInformation/city';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityEnd {
  constructor(private httpClient: HttpClient) {}

  createNewCity(entity:City){
    return this.httpClient.post( environment.apiUrl +'/UAA/api/city/create-new-city/admin/ver1' , entity)
    .pipe(map(res => res));
  }

  getList(){
    return this.httpClient.get( environment.apiUrl +'/UAA/api/city/get-city-list/ver1' )
    .pipe(map(res => res));
  }

  getTrueStatusList(){
    return this.httpClient.get( environment.apiUrl +'/UAA/api/city/get-true-status-city-list/ver1' )
    .pipe(map(res => res));
  }

  changeCityStatus(cityId:string,status:boolean) {

    return this.httpClient.get( environment.apiUrl +'/UAA/api/city/change-city-status/admin/ver1?cityId='+cityId+'&status='+status)
      .pipe(map(res => res));
  }
}
