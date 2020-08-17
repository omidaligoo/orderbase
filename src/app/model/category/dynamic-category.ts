import { DynamicCategoryShowType } from "../../enumeration/category/dynamic-category-show-type.enum";
import { DynamicCategoryType } from "../../enumeration/category/dynamic-category-type.enum";
import { File } from "../file/file";
export class DynamicCategory {
    
    title: string;
    image:File;
    description:string;
    status:boolean;
    dynamicCategoryShowType:DynamicCategoryShowType;
    dynamicCategoryType:DynamicCategoryType;
    
}
