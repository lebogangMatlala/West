import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BackEndService } from 'src/app/Admin/Services/back-end.services';
import { ViewChild} from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdminVacancy } from 'src/app/Admin/Models/admin-vacancy-model';
import { VacancyService } from 'src/app/Admin/Services/admin-vacancy.service';

@Component({
  selector: 'app-admin-vacancy',
  templateUrl: './admin-vacancy.component.html',
  styleUrls: ['./admin-vacancy.component.css']
})
export class AdminVacancyComponent implements OnInit {
  @Input() vacancy?: AdminVacancy;
  @Input() index: number= 0 ;
  constructor(private vacancyService: VacancyService, private router: Router, private backEndService: BackEndService,private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    console.log(this.vacancy);
    console.log(this.index);
  }
  @ViewChild('drawer') drawer: any;
  public selectedItem : string = '';
   public isHandset$: Observable<boolean> = this.breakpointObserver
     .observe(Breakpoints.Handset)
     .pipe(map((result: BreakpointState) => result.matches));

     onDelete(){
      console.log("onDelete() called!!!")
      // this.vacancyService.getVacancy(this.index)
      this.vacancyService.getVacancy();
      this.backEndService.saveData();
    }
  onEdit(){
   this.router.navigate(["/tender-add", this.index]);
   
  }
  
  
  onDisplay(){
    console.log('onDisplay() called!!!!!!')
    this.router.navigate(["/tender-description", this.index]);
  }
  
  
}
