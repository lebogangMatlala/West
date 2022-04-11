import { Vacancy } from './../shared/Model/vacancy.model';
import { Tenders } from './../shared/Model/tenders.model';

import { AuthService } from './../shared/services/auth.service';
import { TenderService } from './../shared/services/tender.service';
import { SenderService } from './../shared/sender-services/sender.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { Tutorial } from '../shared/Model/tutorial.model';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tenders-vaccancies',
  templateUrl: './tenders-vaccancies.component.html',
  styleUrls: ['./tenders-vaccancies.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class TendersVaccanciesComponent implements OnInit {

  tenders?: Tenders[];
  vacancies?: Vacancy[];


  message?:String
  nameOfTender?:String
  listofTenders?:any
  listofVacancies?:any

  awardedTen = false;
  closedTen = false;
  openTen = false;
  rfqTen = false;
  rfpTen = false;


  constructor(private senderService:SenderService,
    private breakpointObserver: BreakpointObserver,
    private tenderService:TenderService) {

      this.retrieveTenders();
      this.retrieveVacancies();

    }

    //retrieve tenders
    retrieveTenders(): void {
      this.tenderService.getAllTenders().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(data => {
        this.tenders = data;
        console.log("This is the tenders data"+this.tenders)
      });
    }

    //retrieve vacancies
    retrieveVacancies():void{
      this.tenderService.getAllVacancies().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(data => {
        this.vacancies = data;
        console.log("This is the vacancies data"+this.vacancies)
      });
    }

    
  ngOnInit(): void {
    this.message=this.senderService.getMessage();
    this.nameOfTender=this.senderService.getTenderName();
    console.log(this.tenders);

  }

  @ViewChild('drawer') drawer: any;
  public selectedItem : string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
     .observe(Breakpoints.Handset)
     .pipe(map((result: BreakpointState) => result.matches));

 closeSideNav() {
   if (this.drawer._mode=='over') {
     this.drawer.close();
   }
 }

}
