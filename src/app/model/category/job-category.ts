import {GeneralDomain} from '../../base/general/general-domain';

export class JobCategory extends GeneralDomain{
    forEach(arg0: (childObj: any) => void) {
      throw new Error("Method not implemented.");
    }
    title:string;
    description:string;
    status:boolean;
}
