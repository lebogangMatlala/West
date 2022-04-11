import { SenderService } from './../shared/sender-services/sender.service';
import { Component, OnInit } from '@angular/core';


import { ViewChild} from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  // constructor() { }
  nameOfTender?:String
  ngOnInit(): void {
    this.nameOfTender=this.senderService.getTenderName();
  }

  @ViewChild('drawer') drawer: any;
  public selectedItem : string = '';
   public isHandset$: Observable<boolean> = this.breakpointObserver
     .observe(Breakpoints.Handset)
     .pipe(map((result: BreakpointState) => result.matches));


   constructor(private breakpointObserver: BreakpointObserver,private senderService:SenderService) {}

 closeSideNav() {
   if (this.drawer._mode=='over') {
     this.drawer.close();
   }
 }



}
