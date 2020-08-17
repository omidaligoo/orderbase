import { Component, OnInit } from '@angular/core';
import {City} from '../../../../../model/basicInformation/city';
import {CityService} from '../../../../../service/basicInformation/city.service';

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.scss']
})
export class CreateCityComponent implements OnInit {

  city:City=new City();
  newCity:City=new City();
  constructor(private cityService:CityService) { }

  ngOnInit(): void {

  }

  submitForm(){

    this.cityService.createNewCity(this.city).subscribe((res: any) => {
      console.log(res);
      this.newCity=res.data;
    });
    console.log(this.city);
  }

}
