import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SenderService } from '../shared/sender-services/sender.service';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class HistoryDetailsComponent implements OnInit {

  awardedTen = false;
  closedTen = false;
  openTen = false;
  rfqTen = false;
  rfpTen = false;

  constructor(private breakpointObserver: BreakpointObserver,
    public senderService: SenderService,
    private _router: Router) { }

  ngOnInit(): void {
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
