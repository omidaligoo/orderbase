import { Component, OnInit } from '@angular/core';
import {SubCategory} from '../../../../../model/category/sub-category';
import {MainCategory} from '../../../../../model/category/main-category';
import {MainCategoryService} from '../../../../../service/category/main-category.service';
import {Image} from '../../../../../model/file/image';
import {File} from '../../../../../model/file/file';
import {Type} from '../../../../../enumeration/file/type.enum';
import {UploadStatus} from '../../../../../enumeration/file/upload-status.enum';
import {SubCategoryService} from '../../../../../service/category/sub-category.service';
import {FileService} from '../../../../../service/file/file.service';
import {ToastrService} from '../../../../../base/service/toastr.service';


@Component({
  selector: 'app-sub-category-create',
  templateUrl: './sub-category-create.component.html',
  styleUrls: ['./sub-category-create.component.scss']
})
export class SubCategoryCreateComponent implements OnInit {

  subCategory:SubCategory= new SubCategory();
  newSubCategory:SubCategory;

  mainCategoryList:MainCategory[]=[];

  public userFile:any = File;
  uploadedImage:Image=new Image();
  uploadedFile:File=new File();

  fileType:Type;

  constructor(private mainCategoryService:MainCategoryService,private subCategoryService:SubCategoryService,private fileService:FileService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.mainCategoryService.getTrueStatusList() .subscribe((res: any) => {
      console.log(res.data);
      this.mainCategoryList=res.data;
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
    console.log(this.subCategory);
    if (this.subCategory.mainCategoryId){
      this.mainCategoryService.getOne(this.subCategory.mainCategoryId).subscribe((res: any) => {
        this.subCategory.mainCategory=res.data;
        console.log(this.subCategory);
      });
    }
    if(this.uploadedFile.fileName){
      console.log('فایل انتخاب شده است');
      const formData=new FormData();
      const fileDomain=new Blob([JSON.stringify(this.uploadedFile)], {type : 'application/json'});
      formData.append('fileDomain',fileDomain);
      formData.append('file',this.userFile);


      this.fileService.storeOneFile(formData).subscribe((res: any) => {
        console.log(res);
        if (res.flag == true){
          this.subCategory.image=res.data;
          this.subCategoryService.createNewSubCategory(this.subCategory).subscribe((resSubCategory: any) => {
              console.log(resSubCategory);
              this.toastrService.KnowFlag(res.flag);
              this.newSubCategory=resSubCategory.data;
          });

        }
      });
    }
  };
}
