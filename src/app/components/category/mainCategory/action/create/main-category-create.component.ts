import { Component, OnInit } from '@angular/core';
import { JobCategory} from '../../../../../model/category/job-category';
import {JobCategoryService} from '../../../../../service/category/job-category.service';
import {MainCategory} from '../../../../../model/category/main-category';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {Image} from '../../../../../model/file/image';
import {File} from '../../../../../model/file/file';
import {Type} from '../../../../../enumeration/file/type.enum';
import {UploadStatus} from '../../../../../enumeration/file/upload-status.enum';
import {FileService} from '../../../../../service/file/file.service';
import {MainCategoryService} from '../../../../../service/category/main-category.service';


@Component({
  selector: 'app-main-category-create',
  templateUrl: './main-category-create.component.html',
  styleUrls: ['./main-category-create.component.scss']
})
export class MainCategoryCreateComponent implements OnInit {
  newMainCategory:MainCategory=new MainCategory();
  dropdownList = [];
  selectedItems = [];
  dropdownSettings :IDropdownSettings;

  constructor(private jobCategoryService:JobCategoryService,private fileService:FileService,private mainCategoryService:MainCategoryService) { }

  jobCategoryList:JobCategory[]=[];
  mainCategory:MainCategory=new MainCategory();

  index:number;

  public userFile:any = File;
  uploadedImage:Image=new Image();
  uploadedFile:File=new File();

  fileType:Type;


  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.jobCategoryService.getTrueStatusList() .subscribe((res: any) => {
      this.jobCategoryList=res.data;
      for(let jc of this.jobCategoryList){
      this.index =this.jobCategoryList.findIndex(item=>item.id == jc.id);
      //this.dropdownList.push({ item_id: this.index+1, item_text: jc.title })
      this.dropdownList=this.dropdownList.concat({ item_id: jc.id, item_text: jc.title })
    }

      console.log(this.jobCategoryList);
    })


    this.selectedItems = [

    ];

    console.log(this.dropdownList);

  };

  onItemSelect(item: any) {
    console.log(item);
    if(this.mainCategory.jobCategoryIdList.indexOf(item.item_id) == -1){
      this.mainCategory.jobCategoryIdList.push(item.item_id);
    }

    console.log(this.mainCategory);
  }
  onSelectAll(items: any) {
    console.log(items);
    for(let item of items){
      if(this.mainCategory.jobCategoryIdList.indexOf(item.item_id) == -1){
        this.mainCategory.jobCategoryIdList.push(item.item_id);
      }
    }
  }
  onItemDeSelect(item: any) {
    console.log('onItemDeSelect', item);
    const index: number = this.mainCategory.jobCategoryIdList.indexOf(item.item_id);
    if (index !== -1) {
      this.mainCategory.jobCategoryIdList.splice(index, 1);
    }
    console.log(this.mainCategory);
  }
  onItemDeSelectAll(item: any) {
    this.mainCategory.jobCategoryIdList=[];
    console.log(this.mainCategory);
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
          this.mainCategory.image=res.data;
          this.mainCategoryService.createNewMainCategory(this.mainCategory).subscribe((resMainCategory: any) => {
              console.log(resMainCategory);
              this.newMainCategory=resMainCategory.data;
          });

        }
      });
    }

  }

}
