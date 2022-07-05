import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { AdminVacancy } from '../../Models/admin-vacancy-model';
import { FileUploadService } from '../../Services/file-upload.service';
import { Observable } from 'rxjs';
import { BackEndService } from '../../Services/back-end.services';
import { VacancyService } from '../../Services/admin-vacancy.service';
@Component({
  selector: 'app-list-vancancy',
  templateUrl: './list-vancancy.component.html',
  styleUrls: ['./list-vancancy.component.css']
})
export class ListVancancyComponent implements OnInit {
  @Input() tender?: AdminVacancy;
  @Input() index: number= 0 ;
  listOfVacancys: AdminVacancy[] = [];
  fileUploads?: any[];

  searchText: any;
  constructor(private vacancyService:VacancyService, 
    private backEndService: BackEndService, 
    private breakpointObserver: BreakpointObserver, 
    private uploadService: FileUploadService
    
    ) { }
  

    ngOnInit(): void {
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

    

  

