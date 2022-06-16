import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BackEndService } from 'src/app/Admin/Services/back-end.services';
import { TenderService } from 'src/app/Admin/Services/admin-tender.service';
import { AdminTender} from 'src/app/Admin/Models/admin-tender-model';
import { ViewChild} from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Component({
  selector: 'app-admin-tender-description',
  templateUrl: './admin-tender-description.component.html',
  styleUrls: ['./admin-tender-description.component.css']
})
export class AdminTenderDescriptionComponent implements OnInit {
tender!: AdminTender;
@Input() index: number= 0 ;

  constructor (private activatedRoute: ActivatedRoute, private tenderService: TenderService, 
     private breakpointObserver: 
    BreakpointObserver, private backEndService: BackEndService,
     private router: Router) 
     {
    activatedRoute.params.subscribe((params)=>{
      if(params.index)
      this.tender = tenderService.getTender(params.index);
    })
    
   }

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

TenderEdit(){
  this.router.navigate(["/tender-add", this.index]);
  
 }

 TenderDelete(){
  console.log("onDelete() called!!!")
  this.tenderService.deleteTender(this.index);
  this.backEndService.saveData();
         
         //Navigate to /tender-list
         this.router.navigate(['/tender-list']);
}

}