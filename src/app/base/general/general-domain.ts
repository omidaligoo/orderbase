export class GeneralDomain {

    id:string;
    /* document creation date */
    systemCreationDate:Date;
    /* who create this document */
    creatorId:string;
    /* who is this document */
    ownerId:string;
    
    shardKey:number;
    deleted:boolean;
    deleteDate:Date;
    deleteBy:string;

}
