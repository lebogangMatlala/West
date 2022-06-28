import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';
import {
  BreakpointObserver,Breakpoints,BreakpointState,} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-admin-feedback',
  templateUrl: './admin-feedback.component.html',
  styleUrls: ['./admin-feedback.component.css']
})
export class AdminFeedbackComponent implements OnInit {


  user$ = this.authService.currentUser$;
  constructor(private authService: AuthenticationService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
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
