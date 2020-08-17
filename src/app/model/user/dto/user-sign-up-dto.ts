import {Role} from '../../../enumeration/user/role.enum';

export class UserSignUpDto {
  mobile:string;
  verifyCode:string;
  role:Role;
  firstName:string;
  lastName:string;
}
