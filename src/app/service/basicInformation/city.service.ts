import { Injectable } from '@angular/core';
import {City} from '../../model/basicInformation/city';
import {CityEnd} from '../../endpoint/basicInformation/city-end';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private cityEndpoint:CityEnd) { }

  createNewCity(entity:City){
      return this.cityEndpoint.createNewCity(entity);
  }

  getList(){
      return this.cityEndpoint.getList();
  }

  getTrueStatusList(){
      return this.cityEndpoint.getTrueStatusList();
  }

  changeCityStatus(city:City,status:boolean){
    return this.cityEndpoint.changeCityStatus(city.id,status)
  }

}
