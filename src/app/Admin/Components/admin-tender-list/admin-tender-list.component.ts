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
import { Bidder } from '../../Models/admin-bidder-model';
import { SubmissionService } from '../../Services/submission.service';

@Component({
  selector: 'app-admin-tender-list',
  templateUrl: './admin-tender-list.component.html',
  styleUrls: ['./admin-tender-list.component.css']
})
export class AdminTenderListComponent implements OnInit {
  listOfTenders: AdminTender[] = [];

  //bidders
  listOfBidders: Bidder[] = [];


  constructor(private tenderService: TenderService,
     private backEndService: BackEndService, 
    private breakpointObserver: BreakpointObserver,
    private submissionService: SubmissionService
    ) {}

ngOnInit(): void {
     this.onFetch();
 this.listOfTenders = this.tenderService.getTenders();
this.tenderService.listChangedEvent.subscribe((listOfTenders: AdminTender[])=>{
  this.listOfTenders = this.tenderService.getTenders();

    
    this.listOfBidders = this.submissionService.getBidders();
   this.submissionService.listChangedEvent.subscribe((listOfBidders: Bidder[])=>{
     this.listOfBidders = this.submissionService.getBidders();
   
    }
    )

 
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


  saveBidder(){
    console.log("onSave() called!!!! ");
    this.backEndService.saveBidder();

  }

  fetchBidder(){
    console.log("onfetch() called!!!!");
    this.backEndService.fetchBidder;
  }





  @ViewChild('drawer') drawer: any;
  public selectedItem : string = '';
   public isHandset$: Observable<boolean> = this.breakpointObserver
     .observe(Breakpoints.Handset)
     .pipe(map((result: BreakpointState) => result.matches));
  }
