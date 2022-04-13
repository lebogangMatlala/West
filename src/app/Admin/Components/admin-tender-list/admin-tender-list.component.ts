import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BackEndService } from 'src/app/Admin/Services/back-end.services';
import { TenderService } from 'src/app/Admin/Services/admin-tender.service';
import { AdminTender } from 'src/app/Admin/Models/admin-tender-model';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {Storage, ref, uploadBytesResumable, getDownloadURL} from '@angular/fire/storage';

import { ViewChild} from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-tender-list',
  templateUrl: './admin-tender-list.component.html',
  styleUrls: ['./admin-tender-list.component.css']
})
export class AdminTenderListComponent implements OnInit {
  listOfTenders: AdminTender[] = [];
  constructor(private tenderService: TenderService, private backEndService: BackEndService, private breakpointObserver: BreakpointObserver) {}

ngOnInit(): void {
     this.onFetch();

    this.listOfTenders = this.tenderService.getTenders();
this.tenderService.listChangedEvent.subscribe((listOfTenders: AdminTender[])=>{
  this.listOfTenders = this.tenderService.getTenders();

 
}

) 
  }

  
  onSave(){
    console.log("onSave() called!!!! ");
    this.backEndService.saveData();

  }

  onFetch(){
    console.log("onfetch() called!!!!");
    this.backEndService.fetchdata();
  }

  @ViewChild('drawer') drawer: any;
  public selectedItem : string = '';
   public isHandset$: Observable<boolean> = this.breakpointObserver
     .observe(Breakpoints.Handset)
     .pipe(map((result: BreakpointState) => result.matches));
  }
