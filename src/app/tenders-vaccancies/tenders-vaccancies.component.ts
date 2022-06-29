import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { Vacancy } from './../shared/Model/vacancy.model';
import { Tenders } from './../shared/Model/tenders.model';

import { AuthService } from './../shared/services/auth.service';
import { TenderService } from './../shared/services/tender.service';
import { SenderService } from './../shared/sender-services/sender.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ViewEncapsulation } from '@angular/core';
import { stringify } from 'querystring';
import { StringFormat } from 'firebase/storage';

@Component({
  selector: 'app-tenders-vaccancies',
  templateUrl: './tenders-vaccancies.component.html',
  styleUrls: ['./tenders-vaccancies.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class TendersVaccanciesComponent implements OnInit {

  public filteredData?: any;

  tendersData?: string;

  data!: string;
  tenders?: Tenders[] = [];
  tendersInfo?:any;
  vacancies?: Vacancy[];


  message?: String
  nameOfTender?: string

  listofTenders?: any
  listofVacancies?: any

  awardedTen = false;
  closedTen = false;
  openTen = false;
  rfqTen = false;
  rfpTen = false;

  num?: any;
  numOfTenders?: any;
  numTenderInfo?:any;

  nameROJ: any;
  listOfTenders: Tenders[] = [];
  tenderNme: string | undefined;



  constructor(private senderService: SenderService,
    private breakpointObserver: BreakpointObserver,
    private tenderService: TenderService,
    private _router: Router,
    private db: AngularFireDatabase) {

    this.retrieveTenders();
    this.retrieveVacancies();


    // this.num = this.retrieveVacancies.length;
    // this.numOfTenders=this.retrieveTenders.length;
    console.log('hello vacancies ' + this.num + 'hello tenders ' + this.numOfTenders);

  }

  ngOnInit(): void {
    this.message = this.senderService.getMessage();
    this.nameOfTender = this.senderService.getTenderName();
    //this.tendersInfo=this.tenderService.getFilterdTenders();
    this.getStorageInfo();
    this.getFilterdTenders();
  console.log("Filtered info "+this.nameOfTender+this.tendersInfo);


  }

  getStorageInfo():void
  {
    let data:any = localStorage.getItem('nameROJ');
    this.nameROJ=data;
    console.log("Hello data "+this.nameROJ);
  }


  getFilterdTenders()
  {
    console.log("Final data on filtered data  "+this.nameROJ);
    this.tenderNme=this.nameROJ;
    console.log("Final data name filtered data "+this.tenderNme);

    //this.db.list('/tenders', ref => ref.orderByChild('title').startAt('Data Mining').endAt('Data Mining'+'\uf8ffs'))
    this.db.list('/tenders', ref => ref.orderByChild('moe').startAt(this.nameROJ).endAt(this.nameROJ+'\uf8ffs')).snapshotChanges().subscribe((res: any[]) => {
      let tempArray:any = [];

      res.forEach((ele: { payload: { val: () => any; }; }) => {
        console.log(ele.payload.val());
        tempArray.push(ele.payload.val())
      });
      this.listOfTenders = tempArray;
      this.numTenderInfo=tempArray.length;
      console.log("Final data"+this.listOfTenders+ " number in array "+this.numTenderInfo);
    })

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
      this.numOfTenders = data.length;

      console.log("This is the tenders data" + this.tenders + ' \n ' + this.numOfTenders)
    });
  }

  // getIndex(_index: any) {
  //   this._router.navigate(['vaccancy-description'])

  //   console.log(_index)
  //   this.senderService.setIndex(_index)
  // }


  getTenderInfo(infor: any) {
    //user_tender_descrip
    this._router.navigate(['user_tender_descrip'])
    console.log(infor)
    this.senderService.setTenderInfo(infor)
  }

  getVacancyInfo(information: any) {
    //user_tender_descrip
    this._router.navigate(['vaccancy-description'])
    console.log(information)
    this.senderService.setVacancyInfo(information)
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
      this.num = data.length;


      console.log("This is the vacancies data " + this.vacancies.length + ' \n ' + this.num)
    });
  }




  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset,Breakpoints.Small,Breakpoints.Medium])
    .pipe(map((result: BreakpointState) => result.matches));

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }



}
