import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BackEndService } from 'src/app/Admin/Services/back-end.services';
import { TenderService } from 'src/app/Admin/Services/admin-tender.service';
import { AdminTender } from 'src/app/Admin/Models/admin-tender-model';
import { ViewChild} from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdminSenderService } from '../../Services/admin-sender.service';

@Component({ 
  selector: 'app-admin-tender',
  templateUrl: './admin-tender.component.html',
  styleUrls: ['./admin-tender.component.css']
})
export class AdminTenderComponent implements OnInit {
  @Input() tender?: AdminTender;
  @Input() index: number= 0 ;


  constructor(private tenderService: TenderService,
     private router: Router,
      private backEndService: BackEndService,
      private adminsenderService: AdminSenderService,
      private breakpointObserver: BreakpointObserver ) { }

  ngOnInit(): void {
    console.log(this.tender);
    console.log(this.index);
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


descDisplay(descrp: any){
  console.log('onDisplay() called!!!!!!');
  this.router.navigate(['tender-description']);
  console.log(descrp);
  this.adminsenderService.setTenderDesc(descrp);



}

  // @ViewChild('drawer') drawer: any;
  // public selectedItem : string = '';
  //  public isHandset$: Observable<boolean> = this.breakpointObserver
  //    .observe(Breakpoints.Handset)
  //    .pipe(map((result: BreakpointState) => result.matches))

// onDisplay(descrp: any){
//   console.log('onDisplay() called!!!!!!')
//   this.router.navigate(['tender-description']);
// console.log(descrp);
// this.adminsenderService.setTenderDesc(descrp),



// },
// }
}