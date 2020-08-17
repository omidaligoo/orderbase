import { Component, OnInit } from '@angular/core';
import {MainCategoryService} from '../../../../../service/category/main-category.service';
import {SubCategoryService} from '../../../../../service/category/sub-category.service';
import {MainCategory} from '../../../../../model/category/main-category';
import {SubCategory} from '../../../../../model/category/sub-category';
import {City} from '../../../../../model/basicInformation/city';
import {CityService} from '../../../../../service/basicInformation/city.service';
import {File} from '../../../../../model/file/file';
import {Image} from '../../../../../model/file/image';
import {Type} from '../../../../../enumeration/file/type.enum';
import {ToastrService} from '../../../../../base/service/toastr.service';
import {FileService} from '../../../../../service/file/file.service';
import {Advertising} from '../../../../../model/advertising/advertising';
import {AdvertisingService} from '../../../../../service/advertising/advertising.service';
import {UploadStatus} from '../../../../../enumeration/file/upload-status.enum';


@Component({
  selector: 'app-advertising-create',
  templateUrl: './advertising-create.component.html',
  styleUrls: ['./advertising-create.component.scss']
})
export class AdvertisingCreateComponent implements OnInit {

  advertising:Advertising=new Advertising();
  newAdvertising:Advertising=new Advertising();

  mainCategoryList:MainCategory[]=[];
  subCategoryList:SubCategory[]=[];
  cityList:City[]=[];

  public userFile:any = File;
  uploadedImage:Image=new Image();
  uploadedFile:File=new File();

  fileType:Type;

  constructor(private mainCategoryService:MainCategoryService,
    private subCategoryService:SubCategoryService,
    private cityService:CityService,
    private fileService:FileService,
    private advertisingService:AdvertisingService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.subCategoryService.getTrueStatusList() .subscribe((res: any) => {
      this.subCategoryList=res.data;
      console.log(this.subCategoryList);
    });
    this.mainCategoryService.getTrueStatusList().subscribe((res: any) => {
      this.mainCategoryList=res.data;
      console.log(this.mainCategoryList);
    });
    this.cityService.getTrueStatusList().subscribe((res: any) => {
      this.cityList=res.data;
      console.log(this.cityList);
    })

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
          this.advertising.image=res.data;
          console.log(this.advertising);
          this.advertisingService.createNewAdvertising(this.advertising).subscribe((resAdvertising: any) => {
              console.log(resAdvertising);
              this.toastrService.KnowFlag(resAdvertising.flag);
              this.newAdvertising=resAdvertising.data;
          });

        }
      });
    }
  };

}
