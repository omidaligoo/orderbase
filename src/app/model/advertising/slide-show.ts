import { Role } from "../../enumeration/user/role.enum";
import { File } from "../file/file";
import { MainCategory } from "../category/main-category";
import {GeneralDomain} from '../../base/general/general-domain';

export class SlideShow extends GeneralDomain{
    image:File;
    title:string;
    description:string;
    mainCategoryId:string;
    home:boolean;
    status:boolean;


}
