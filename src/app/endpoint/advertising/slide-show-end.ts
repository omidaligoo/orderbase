import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SlideShow} from '../../model/advertising/slide-show';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SlideShowEnd {
  constructor(private httpClient: HttpClient) {}

  createNewSlideShow(slideShow:SlideShow) {

    return this.httpClient.post( environment.apiUrl +'/UAA/api/slideShow/create-new-slideShow/admin/ver1' , slideShow)
      .pipe(map(res => res));
  }

  getList(){
    return this.httpClient.get( environment.apiUrl + '/UAA/api/slideShow/get-slideShow-list/ver1')
  }

  changeSlideShowStatus(slideShowId:string,status:boolean){
    return this.httpClient.get( environment.apiUrl + '/UAA/api/slideShow/change-slideShow-status/admin/ver1?advertisingId='+slideShowId+'&status='+status);
  }
}
