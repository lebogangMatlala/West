import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-admin-vacancy-list',
  templateUrl: './admin-vacancy-list.component.html',
  styleUrls: ['./admin-vacancy-list.component.css']
})
export class AdminVacancyListComponent implements OnInit {
  listOfVacancys: AdminVacancy[] = [];
  constructor(private vacancyService:VacancyService, private backEndService: BackEndService, private breakpointObserver: BreakpointObserver) { }

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

   
   



