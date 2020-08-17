import { Component, OnInit ,Input} from '@angular/core';
import {City} from '../../../../model/basicInformation/city';
import {CityService} from '../../../../service/basicInformation/city.service';
import {ToastrService} from '../../../../base/service/toastr.service';
@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  @Input() newCity:City;
  cityList:City[]=[];

  constructor(private cityService:CityService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.cityService.getList().subscribe((res: any) => {
      this.cityList=res.data;
      console.log(this.cityList);
    });
  }

  ngOnChanges(changes: any) {
    this.cityList.push(changes.newCity.currentValue);
  }

  setOneStatusTrue(city:City){
    this.cityService.changeCityStatus(city,true).subscribe((res: any) => {

      console.log(res);
      this.toastrService.KnowFlag(res.flag);
      for(let jc of this.cityList){
          if(jc.id==city.id){
            jc.status=true;
          }
      }

    });
  }
  setOneStatusFalse(city:City){
    this.cityService.changeCityStatus(city,false).subscribe((res: any) => {

      console.log(res);
      this.toastrService.KnowFlag(res.flag);
      for(let jc of this.cityList){
          if(jc.id==city.id){
            jc.status=false;
          }
      }

    });
  }

}
