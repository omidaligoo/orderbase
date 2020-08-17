import {OrderHistoryStatus} from "../../enumeration/order/order-history-status.enum";
export class OrderStatusDto {
    status:boolean;
    orderHistoryStatus:OrderHistoryStatus;
    note:string;

}
