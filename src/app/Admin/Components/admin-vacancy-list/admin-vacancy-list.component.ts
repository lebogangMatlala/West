import { Component, Input, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AdminVacancy } from '../../Models/admin-vacancy-model';
import { BackEndService } from '../../Services/back-end.services';
import { VacancyService } from 'src/app/Admin/Services/admin-vacancy.service';
import { FileUploadService } from 'src/app/Admin/Services/file-upload.service';
import { FileUpload } from '../../Models/vacancy-upload-model';

@Component({
  selector: 'app-admin-vacancy-list',
  templateUrl: './admin-vacancy-list.component.html',
  styleUrls: ['./admin-vacancy-list.component.css']
})
export class AdminVacancyListComponent implements OnInit {
  @Input() tender?: AdminVacancy;
  @Input() index: number= 0 ;
  listOfVacancys: AdminVacancy[] = [];

  

  fileUploads?: any[];
  constructor(private vacancyService:VacancyService, private backEndService: BackEndService, private breakpointObserver: BreakpointObserver, private uploadService: FileUploadService) { }

  ngOnInit(): void {

    this.uploadService.getFiles(6).snapshotChanges().pipe(
      map(changes =>
        
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  

    this.onFetch();

    this.listOfVacancys = this.vacancyService.getVacancy();
this.vacancyService.listChangedEvent.subscribe((listOfVacancys: AdminVacancy[])=>{
  this.listOfVacancys = this.vacancyService.getVacancy();

 
}

) 
  }

  
  SaveVacancy(){
    console.log("onSave() called!!!! ");
    this.backEndService.SaveVacancy();

  }

  onFetch(){
    console.log("onfetch() called!!!!");
    this.backEndService.fetchVacancy();
  }

  @ViewChild('drawer') drawer: any;
  public selectedItem : string = '';
   public isHandset$: Observable<boolean> = this.breakpointObserver
     .observe(Breakpoints.Handset)
     .pipe(map((result: BreakpointState) => result.matches));
  }

   
   



