import { Component, OnInit, Input } from '@angular/core';
import { SlideShow} from '../../../../model/advertising/slide-show';
import {SlideShowService} from '../../../../service/advertising/slide-show.service';
import {ToastrService} from '../../../../base/service/toastr.service';

@Component({
  selector: 'app-slide-show-list',
  templateUrl: './slide-show-list.component.html',
  styleUrls: ['./slide-show-list.component.scss']
})
export class SlideShowListComponent implements OnInit {

  @Input() newSlideShow:SlideShow;
  slideShowList:SlideShow[]=[];


  constructor(private slideShowService:SlideShowService,private toastrService:ToastrService) { }

  ngOnChanges(changes: any) {
    this.slideShowList.push(changes.newSlideShow.currentValue);
  }

  ngOnInit(): void {
    this.slideShowService.getList().subscribe((res: any) => {
      this.slideShowList=res.data;
      console.log(this.slideShowList);
    });
  }

  setOneStatusTrue(slideShow:SlideShow){
    this.slideShowService.changeSlideShowStatus(slideShow,true).subscribe((res: any) => {

      console.log(res);
      this.toastrService.KnowFlag(res.flag);
      for(let jc of this.slideShowList){
          if(jc.id==slideShow.id){
            jc.status=true;
          }
      }

    });
  }

  setOneStatusFalse(slideShow:SlideShow){
    this.slideShowService.changeSlideShowStatus(slideShow,true).subscribe((res: any) => {

      console.log(res);
      this.toastrService.KnowFlag(res.flag);
      for(let jc of this.slideShowList){
          if(jc.id==slideShow.id){
            jc.status=false;
          }
      }

    });
  }

}
