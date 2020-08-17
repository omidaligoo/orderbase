import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileEnd {
  constructor(private httpClient: HttpClient) {}

  storeOneFile(formData) {

    return this.httpClient.post( environment.apiUrl +'/UAA/api/file/store-one-file/ver1',formData)
      .pipe(map(res => res));
  }
}
