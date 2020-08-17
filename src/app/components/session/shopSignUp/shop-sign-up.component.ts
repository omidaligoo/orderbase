import { Component, OnInit } from '@angular/core';
import { CityService} from '../../../service/basicInformation/city.service';
import { JobCategoryService} from '../../../service/category/job-category.service';
import { JobCategory} from '../../../model/category/job-category';
import { City} from '../../../model/basicInformation/city';
import { UserService} from '../../../service/user/user.service';
import { User} from '../../../model/user/user';
import { ToastrService} from '../../../base/service/toastr.service';

@Component({
  selector: 'app-shop-sign-up',
  templateUrl: './shop-sign-up.component.html',
  styleUrls: ['./shop-sign-up.component.scss']
})
export class ShopSignUpComponent implements OnInit {

  user:User=new User();

  jobCategoryList:JobCategory[]=[];
  cityList:City[]=[];

  constructor(private cityService:CityService,
    private jobCategoryService:JobCategoryService,
    private userService:UserService,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {
    this.jobCategoryService.getList().subscribe((res: any) => {
      this.jobCategoryList=res.data;
      console.log(this.jobCategoryList);
    });
    this.cityService.getList().subscribe((res: any) => {
      this.cityList=res.data;
      console.log(this.cityList);
    });
  }

  submitForm(){
    console.log(this.user);
    this.userService.createShop(this.user).subscribe((resUser: any) => {
      console.log(resUser);
      this.toastrService.KnowFlag(resUser.flag);

  });
  }

}
