import {ChargeType} from '../../enumeration/user/charge-type.enum'
export class Wallet {
    chargeType:ChargeType;
    externalOrderId:string;
    description:string;
    amount:number;
    status:boolean;
}
