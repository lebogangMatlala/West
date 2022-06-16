import { SenderService } from './../shared/sender-services/sender.service';
import { Tenders } from './../shared/Model/tenders.model';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-user-tender-des',
  templateUrl: './user-tender-des.component.html',
  styleUrls: ['./user-tender-des.component.css']
})
export class UserTenderDesComponent implements OnInit {

  tenderInfo?: Tenders;
  public audioUrl?: SafeResourceUrl;

  constructor(private senderService: SenderService,
    private breakpointObserver: BreakpointObserver,
    private sanitizer: DomSanitizer) { }



  ngOnInit(): void {
    this.tenderInfo = this.senderService.getTenderInfo();
    console.log(this.tenderInfo?.title);
  
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
