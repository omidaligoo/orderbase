import { Component, OnInit } from '@angular/core';
import { Product} from '../../../model/product/product';
import { MainCategoryService } from '../../../service/category/main-category.service';
import { SubCategoryService} from '../../../service/category/sub-category.service';
import { MainCategory } from '../../../model/category/main-category';
import { SubCategory } from '../../../model/category/sub-category';
import { Image } from '../../../model/file/image';
import { File } from '../../../model/file/file';
import { Type } from '../../../enumeration/file/type.enum';
import { UploadStatus } from '../../../enumeration/file/upload-status.enum';
import { FileService } from '../../../service/file/file.service';
import { ToastrService } from '../../../base/service/toastr.service';
import { ProductService } from '../../../service/product/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  product:Product=new Product();
  mainCategoryList:MainCategory[]= [];
  subCategoryList:SubCategory[]= [];

  public userFile:any = File;
  uploadedImage:Image=new Image();
  uploadedFile:File=new File();

  fileType:Type;


  constructor(private mainCategoryService:MainCategoryService,
    private subCategoryService:SubCategoryService,
    private fileService:FileService,
    private toastrService:ToastrService,
    private productService:ProductService,
    ) { }

  ngOnInit(): void {
    this.mainCategoryService.getTrueStatusList() .subscribe((res: any) => {
      console.log(res.data);
      this.mainCategoryList=res.data;
    });
  }

  submitForm(){
    console.log(this.product);
    if (this.product.mainCategoryId){
      this.mainCategoryService.getOne(this.product.mainCategoryId).subscribe((res: any) => {
        this.product.mainCategory=res.data;
        console.log(this.product);
      });
    }
    if (this.product.subCategoryId){
      this.subCategoryService.getOne(this.product.subCategoryId).subscribe((res: any) => {
        this.product.subCategory=res.data;
        console.log(this.product);
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
          this.product.mainImage=res.data;
          this.productService.createNewProduct(this.product).subscribe((resProduct: any) => {
              console.log(resProduct);
              this.toastrService.KnowFlag(res.flag);

          });

        }
      });
    }
  }

  clearFilter(){
    this.subCategoryService.getSubCategoryListMainCategoryId(this.product.mainCategoryId).subscribe((res: any) => {
      console.log(res.data);
      this.subCategoryList=res.data;
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

}
