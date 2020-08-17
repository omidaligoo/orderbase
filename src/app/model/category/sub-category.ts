import { MainCategory } from "./main-category";
import { File } from "../file/file";
import {GeneralDomain} from '../../base/general/general-domain'

export class SubCategory  extends GeneralDomain {
    title:string;
    image:File;
    description:string;
    mainCategory:MainCategory;
    mainCategoryId:string;
    status:boolean;
}
