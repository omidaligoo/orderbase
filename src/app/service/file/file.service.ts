import { Injectable } from '@angular/core';
import { FileEnd} from '../../endpoint/file/file-end';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private fileEnd:FileEnd) { }

  storeOneFile (formData) {
    return this.fileEnd.storeOneFile(formData);
   }
}
