import { File } from "../file/file"
import {GeneralDomain} from '../../base/general/general-domain'
export class MainCategory extends GeneralDomain {
    title:string;
    image:File;
    description:string;
    status:boolean;
    jobCategoryIdList:string[]=[];
}
