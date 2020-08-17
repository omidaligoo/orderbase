import { Component, OnInit } from '@angular/core';
import {MainCategoryService} from '../../../../../service/category/main-category.service';
import {FileService} from '../../../../../service/file/file.service';
import {ToastrService} from '../../../../../base/service/toastr.service';
import {SlideShowService} from '../../../../../service/advertising/slide-show.service';
import {MainCategory} from '../../../../../model/category/main-category';
import {SlideShow} from '../../../../../model/advertising/slide-show';
import {Image} from '../../../../../model/file/image';
import {File} from '../../../../../model/file/file';
import {Type} from '../../../../../enumeration/file/type.enum';
import {UploadStatus} from '../../../../../enumeration/file/upload-status.enum';

@Component({
  selector: 'app-slide-show-create',
  templateUrl: './slide-show-create.component.html',
  styleUrls: ['./slide-show-create.component.scss']
})
export class SlideShowCreateComponent implements OnInit {

  slideShow:SlideShow=new SlideShow();
  newSlideShow:SlideShow=new SlideShow();

  mainCategoryList:MainCategory[]=[];

  public userFile:any = File;
  uploadedImage:Image=new Image();
  uploadedFile:File=new File();

  fileType:Type;
  constructor(private slideShowService:SlideShowService
    ,private mainCategoryService:MainCategoryService
    ,private fileService:FileService
    ,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.mainCategoryService.getTrueStatusList().subscribe((res: any) => {
      this.mainCategoryList=res.data;
      console.log(this.mainCategoryList);
    });
  }

  onSelecetFile(event){
    const file=event.target.files[0];
    this.userFile=file;
    console.log(this.userFile);
    this.uploadedImage.smallHeight=20;
    this.uploadedImage.smallWidth=35;
    this.uploadedImage.resize=true;
    this.uploadedImage.originalSecure=false;
    this.uploadedImage.smallSecure=false;

    this.uploadedFile.fileType=Type.IMAGE;
    this.uploadedFile.fileName=this.userFile.name;
    this.uploadedFile.fileContentType=this.userFile.type;
    this.uploadedFile.sizeInByte=this.userFile.size;
    this.uploadedFile.uploadStatus=UploadStatus.PENDING;
    this.uploadedFile.imageModel=this.uploadedImage;

    console.log(this.uploadedFile);
  }
  submitForm(){
    if(this.uploadedFile.fileName){
      console.log('فایل انتخاب شده است');
      const formData=new FormData();
      const fileDomain=new Blob([JSON.stringify(this.uploadedFile)], {type : 'application/json'});
      formData.append('fileDomain',fileDomain);
      formData.append('file',this.userFile);


      this.fileService.storeOneFile(formData).subscribe((res: any) => {
        console.log(res);
        if (res.flag == true){
          this.slideShow.image=res.data;
          console.log(this.slideShow);
          this.slideShowService.createNewSlideShow(this.slideShow).subscribe((resAdvertising: any) => {
              console.log(resAdvertising);
              this.toastrService.KnowFlag(resAdvertising.flag);
              this.newSlideShow=resAdvertising.data;
          });

        }
      });
    }
  };

}
