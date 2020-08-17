import { Component, OnInit } from '@angular/core';
import { User} from '../../../../model/user/user';
import {City} from '../../../../model/basicInformation/city';
import {UserService} from '../../../../service/user/user.service';
import {ToastrService} from '../../../../base/service/toastr.service';
import {CityService} from '../../../../service/basicInformation/city.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent implements OnInit {
  cityList:City[]=[];
  user:User=new User();

  dropdownList = [];
  selectedItems = [];
  dropdownSettings :IDropdownSettings;

  constructor(private cityService:CityService,private userService:UserService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.cityService.getTrueStatusList() .subscribe((res: any) => {
      console.log(res.data);
      this.cityList=res.data;
      for(let jc of this.cityList){

        this.dropdownList=this.dropdownList.concat({ item_id: jc.id, item_text: jc.title })
      }
    });

    this.selectedItems = [];
  }


  onItemSelect(item: any) {
    console.log(item);
    if(this.user.workCityList.indexOf(item.item_id) == -1){
      this.user.workCityList.push(item.item_id);
    }

    console.log(this.user);
  }
  onSelectAll(items: any) {
    console.log(items);
    for(let item of items){
      if(this.user.workCityList.indexOf(item.item_id) == -1){
        this.user.workCityList.push(item.item_id);
      }
    }
  }
  onItemDeSelect(item: any) {
    console.log('onItemDeSelect', item);
    const index: number = this.user.workCityList.indexOf(item.item_id);
    if (index !== -1) {
      this.user.workCityList.splice(index, 1);
    }
    console.log(this.user);
  }
  onItemDeSelectAll(item: any) {
    this.user.workCityList=[];
    console.log(this.user);
  }

  submitForm(){
    console.log(this.user);
    this.userService.createCompany(this.user).subscribe((resUser: any) => {
      console.log(resUser);
      this.toastrService.KnowFlag(resUser.flag);

  });
  }

}
