import { Component, OnInit } from '@angular/core';
import { TenderService } from './../shared/services/tender.service';
import { SenderService } from './../shared/sender-services/sender.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-councilors-page',
  templateUrl: './councilors-page.component.html',
  styleUrls: ['./councilors-page.component.css']
})
export class CouncilorsPageComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver,
    public senderService: SenderService,
    private _router: Router) { }

  ngOnInit(): void {
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
