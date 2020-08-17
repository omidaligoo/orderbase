import { Component, OnInit, Input } from '@angular/core';
import {AdvertisingService} from '../../../../service/advertising/advertising.service';
import {Advertising} from '../../../../model/advertising/advertising';
import {ToastrService} from '../../../../base/service/toastr.service';


@Component({
  selector: 'app-advertising-list',
  templateUrl: './advertising-list.component.html',
  styleUrls: ['./advertising-list.component.scss']
})
export class AdvertisingListComponent implements OnInit {
  @Input() newAdvertising:Advertising;
  advertisingList:Advertising[]=[];

  constructor(private advertisingService:AdvertisingService,private toastrService:ToastrService) { }

  ngOnChanges(changes: any) {
    this.advertisingList.push(changes.newAdvertising.currentValue);
  }
  ngOnInit(): void {
    this.advertisingService.getList().subscribe((res: any) => {
      this.advertisingList=res.data;
      console.log(this.advertisingList);
    });
  }

  setOneStatusTrue(advertising:Advertising){
    this.advertisingService.changeAdvertisingStatus(advertising,true).subscribe((res: any) => {

      console.log(res);
      this.toastrService.KnowFlag(res.flag);
      for(let jc of this.advertisingList){
          if(jc.id==advertising.id){
            jc.status=true;
          }
      }

    });
  }

  setOneStatusFalse(advertising:Advertising){
    this.advertisingService.changeAdvertisingStatus(advertising,false).subscribe((res: any) => {

      console.log(res);
      this.toastrService.KnowFlag(res.flag);
      for(let jc of this.advertisingList){
          if(jc.id==advertising.id){
            jc.status=false;
          }
      }

    });
  }

}
