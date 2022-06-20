import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {


  user$ = this.authService.currentUser$;
  constructor(private breakpointObserver: BreakpointObserver,  
    private authService: AuthenticationService,
    private router: Router) { }

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
   
   navigatetoArticle(){
     this.router.navigate(['article-list'])
   }
   
   }


