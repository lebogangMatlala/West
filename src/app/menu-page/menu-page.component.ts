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


@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  tenderdata: any;
  name?:string="";

  message = "hey i am data from menu"
  constructor(private breakpointObserver: BreakpointObserver,
    public senderService: SenderService,
    private _router: Router) { }

  ngOnInit(): void {
    this.tenderdata = this.senderService.tenders;
    this.senderService.setMessage(this.message);
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

  navigateToNextPage(_name: any)
  {
    this._router.navigate(['tender-vaccancies'])

    console.log(_name)
    this.senderService.setTenderName(_name)
  }

  getIndex(_index:any)
  {
    this._router.navigate(['tender-vaccancies'])

    console.log(_index)
    this.senderService.setIndex(_index)
  }

}
