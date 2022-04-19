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

  vacancyInfo?:[];
  index:any;

  constructor(private breakpointObserver: BreakpointObserver,
    public senderService: SenderService,
    private _router: Router,
    public tenderService:TenderService) { }

  ngOnInit(): void {
    this.index=this.senderService.getIndex();
    console.log(this.index);
    console.log(this.tenderService.getVacancy(this.index));
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
