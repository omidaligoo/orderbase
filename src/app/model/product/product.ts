import {ProductUnit} from "../../enumeration/product/product-unit.enum";
import {File} from "../file/file";
import {DynamicCategoryEmbedProduct} from "../category/dynamic-category-embed-product";
import {Role} from "../../enumeration/user/role.enum";
import {City} from "../basicInformation/city";
import {MainCategory} from "../category/main-category";
import {SubCategory} from "../category/sub-category";
import { GeneralDomain } from 'src/app/base/general/general-domain';


export class Product extends GeneralDomain {
    title:string;
    description:string;
    minCost:number;
    maxCost:number;
    minOrder:number;
    productUnit:ProductUnit;
    mainImage:File;
    imageList:File[]=[];
    likeList:string[] =[];
    dynamicCategoryList:DynamicCategoryEmbedProduct[]=[];
    forRoleList:Role[] =[];
    cityList:City[] =[];
    jobCategoryList:string[] =[];
    mainCategory:MainCategory;
    mainCategoryId:string;
    subCategory:SubCategory;
    subCategoryId:string;
    status:boolean;
    ownerFirstName:string;
    ownerLastName:string;


}
