import { Vacancy } from './../shared/Model/vacancy.model';
import { TenderService } from './../shared/services/tender.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SenderService } from '../shared/sender-services/sender.service';

@Component({
  selector: 'app-vaccancies',
  templateUrl: './vaccancies.component.html',
  styleUrls: ['./vaccancies.component.css']
})
export class VaccanciesComponent implements OnInit {

  vacancyInfo?: [];
  vacancies?: Vacancy[];
  index: any;
  listofVacancies?: any;
  vacanciesInfo?: Vacancy;

  constructor(private breakpointObserver: BreakpointObserver,
    public senderService: SenderService,
    private _router: Router,
    public tenderService: TenderService) { }

  ngOnInit(): void {
    this.index = this.senderService.getIndex();
    console.log(this.index);
    console.log(this.tenderService.getVacancy(this.index));
    this.listofVacancies = this.vacancies;
    console.log(this.listofVacancies);
    this.retrieveVacancies()
    this.vacanciesInfo=this.senderService.getVacancyInfo();
    console.log(this.vacanciesInfo);
  }

  //retrieve vacancies
  retrieveVacancies(): void {
    this.tenderService.getAllVacancies().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.vacancies = data;
      console.log("This is the vacancies data" + this.vacancies)
    });
  }

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));
  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }

 

}
