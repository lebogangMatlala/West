import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BackEndService } from 'src/app/Admin/Services/back-end.services';
import { ViewChild} from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdminVacancy } from 'src/app/Admin/Models/admin-vacancy-model';
import { VacancyService } from 'src/app/Admin/Services/admin-vacancy.service';

import { FileUpload } from 'src/app/Admin/Models/vacancy-upload-model';
import { FileUploadService } from 'src/app/Admin/Services/file-upload.service';


@Component({
  selector: 'app-admin-vacancy',
  templateUrl: './admin-vacancy.component.html',
  styleUrls: ['./admin-vacancy.component.css']
})
export class AdminVacancyComponent implements OnInit {
  @Input() vacancy?: AdminVacancy;
  @Input() index: number= 0 ;
  @Input() fileUpload!: FileUpload;



  

  constructor(private vacancyService: VacancyService, private router: Router, private backEndService: BackEndService,private breakpointObserver: BreakpointObserver, private uploadService: FileUploadService) { }

  ngOnInit(): void {
    console.log(this.vacancy);
    console.log(this.index);
  }
  deleteFileUpload(fileUpload: FileUpload): void{
    this.uploadService.deleteFile(fileUpload);
  }
  @ViewChild('drawer') drawer: any;
  public selectedItem : string = '';
   public isHandset$: Observable<boolean> = this.breakpointObserver
     .observe(Breakpoints.Handset)
     .pipe(map((result: BreakpointState) => result.matches));

     onDelete(){
      console.log("onDelete() called!!!")
      // this.vacancyService.getVacancy(this.index)
      this.vacancyService.getVacancy();
      this.backEndService.saveData();
    }
  onEdit(){
   this.router.navigate(["/tender-add", this.index]);
   
  }
  
  
  onDisplay(){
   
    this.router.navigate(["/vacancy-description", this.index]);
  }
  
  
}
