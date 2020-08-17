import { AdsType } from "../../enumeration/advertisting/ads-type.enum";
import { GeneralDomain } from "../../base/general/general-domain";
import { Role } from "../../enumeration/user/role.enum";
import { File } from "../file/file";
import { MainCategory } from "../category/main-category";
import { AdsPlace } from '../../enumeration/advertisting/ads-place.enum';


export class Advertising extends GeneralDomain  {
    image:File;
    title:string;
    description:string;
    showCount:number;
    place:AdsPlace;
    enable:boolean;
    mainCategoryId:string;
    subCategoryId:string;
    roleList:Role[]=[];
    cityList:string;
    status:boolean;
    adsType:AdsType;
    linkOrId:string;


}
