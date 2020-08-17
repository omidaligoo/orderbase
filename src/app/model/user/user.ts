import {Role} from '../../enumeration/user/role.enum';
import {City} from '../basicInformation/city';
import {JobCategory} from '../category/job-category';
export class User {
    mobile:string;
    role:Role;
    firstName:string;
    lastName:string;
    jobName:string;
    addr:string;
    city:string;
    workCityList:string[]=[];
    workMainCategoryId:string[]=[];
    jobCategory:JobCategory;
    charge:number;
    firstSupsit:boolean;
    smsToken:string;
    verify:boolean;

}
