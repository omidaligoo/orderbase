
import {Product} from '../product/product';
import {OrderHistory} from '../order/order-history';

export class Order {
    product:Product;
    orderCount:number;
    description:string;
    resultCost:number;
    resultDescription:string;
    deliveryDayCount:number;
    delivery:boolean;
    cancel:boolean;
    remittance:boolean;
    customerOk:boolean;
    orderBack:boolean;
    orderHistoryList:OrderHistory[]=[];
    customerBuyWithChargeAmount:number;
    customerBuyWithCharge:boolean;
    checkOurFee:boolean;
    ourFee:number;
    ownerFirstName:string;
    ownerLastName:string;



}
