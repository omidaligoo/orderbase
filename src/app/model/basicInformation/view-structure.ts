import { City } from "./city";
import { ViewType } from "../../enumeration/basicInformation/view-type.enum";
import { DynamicCategory} from "../category/dynamic-category";

export class ViewStructure {
    positionNumber:number;
    viewType:ViewType;
    dynamicCategory:DynamicCategory;
    city:City;
    status:boolean;
}
