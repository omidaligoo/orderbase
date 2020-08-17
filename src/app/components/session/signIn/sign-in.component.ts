import { Component, OnInit } from '@angular/core';
import { UserService} from '../../../service/user/user.service';
import { User} from '../../../model/user/user';
import { UserSignUpDto} from '../../../model/user/dto/user-sign-up-dto';
import { ToastrService} from '../../../base/service/toastr.service';
import { Role} from '../../../enumeration/user/role.enum';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  level:number=1;
  userSignUpDto:UserSignUpDto=new UserSignUpDto();
  company:boolean=false;
  disabeSendCond:boolean=false;
  constructor(private userService:UserService,private toastrService:ToastrService) { }
  ngOnInit(): void {
    this.userSignUpDto.mobile="";
  }
  buttonClicked(){
    if (this.level ==1){
      this.disabeSendCond=true;
      console.log(this.userSignUpDto);
      this.userService.sendSmsToken(this.userSignUpDto.mobile).subscribe((resUser: any) => {

        console.log(resUser);

        this.userSignUpDto.role=resUser.data.role;

        console.log(this.userSignUpDto);

        if(resUser.data.generateCode == true){
          console.log(resUser);

          if (this.userSignUpDto.role == Role.COMPANY){

            this.company=true;
          }
          if (this.userSignUpDto.role == Role.SHOP){
            this.company=false;
          }

          this.disabeSendCond=true;

        };
        if(resUser.generateCode == false){
          this.disabeSendCond=false;

        };
        this.level=2;
      });


    }

  }
  ButtonVerifyClick(){
    this.userService.verifyMobile(this.userSignUpDto.mobile,this.userSignUpDto.verifyCode).subscribe((resVerify: any) => {
      console.log(resVerify);
      if (resVerify.flag==true){
        this.userService.signin(this.userSignUpDto.mobile,this.userSignUpDto.verifyCode).subscribe((resSignin: any) => {
          localStorage.setItem('token',resSignin.access_token );
          localStorage.setItem('operatorFristName',this.userSignUpDto.firstName );
          localStorage.setItem('operatorLastName',this.userSignUpDto.lastName );
          console.log(resSignin);
          console.log(localStorage.getItem('token' ));
          console.log(localStorage.getItem('operatorFristName' ));
          console.log(localStorage.getItem('operatorLastName' ));

        });
      }
    });
  }



}
