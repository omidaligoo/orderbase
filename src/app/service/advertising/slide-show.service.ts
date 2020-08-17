import { Injectable } from '@angular/core';
import {SlideShow} from '../../model/advertising/slide-show'
import {SlideShowEnd} from '../../endpoint/advertising/slide-show-end';

@Injectable({
  providedIn: 'root'
})
export class SlideShowService {

  constructor(private slideShowEnd:SlideShowEnd) { }

  createNewSlideShow(slideShow:SlideShow){
    return this.slideShowEnd.createNewSlideShow(slideShow);
  }

  getList(){
    return this.slideShowEnd.getList();
  }

  changeSlideShowStatus(slideShow:SlideShow,status:boolean){
    return this.slideShowEnd.changeSlideShowStatus(slideShow.id,status);
  }
}
