import { OrderHistoryStatus} from '../../enumeration/order/order-history-status.enum';
export class OrderHistory {
    
    orderHistoryStatus:OrderHistoryStatus;
    create:boolean;
    description:string;
    ownerFirstName:string;
    ownerLastName:string;

}
