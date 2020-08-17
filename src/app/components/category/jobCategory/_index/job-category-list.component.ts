import { Component, OnInit, Input } from '@angular/core';
import {JobCategoryService} from '../../../../service/category/job-category.service';
import {JobCategory} from '../../../../model/category/job-category';
import {ToastrService} from '../../../../base/service/toastr.service';
@Component({
  selector: 'app-job-category-list',
  templateUrl: './job-category-list.component.html',
  styleUrls: ['./job-category-list.component.scss']
})
export class JobCategoryListComponent implements OnInit {

  @Input() newJobCategory:JobCategory;

  jobCategoryList:JobCategory[]=[];
  constructor(private jobCategoryService:JobCategoryService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.jobCategoryService.getList().subscribe((res: any) => {
      this.jobCategoryList=res.data;
      console.log(this.jobCategoryList);
    });
  }

  ngOnChanges(changes: any) {
    this.jobCategoryList.push(changes.newJobCategory.currentValue);
  }

  setOneStatusTrue(jobCategory:JobCategory){

    this.jobCategoryService.changeJobCategoryStatus(jobCategory,true).subscribe((res: any) => {

      console.log(res);
      this.toastrService.KnowFlag(res.flag);
      for(let jc of this.jobCategoryList){
          if(jc.id==jobCategory.id){
            jc.status=true;
          }
      }

    });

  }

  setOneStatusFalse(jobCategory:JobCategory){

    this.jobCategoryService.changeJobCategoryStatus(jobCategory,false).subscribe((res: any) => {

      this.toastrService.KnowFlag(res.flag);

      for(let jc of this.jobCategoryList){
        if(jc.id==jobCategory.id){
          jc.status=false;
        }
    }

    });
  }

}
