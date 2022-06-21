import { Component, OnInit } from '@angular/core';

import { SubmissionService } from '../../Services/submission.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BackEndService } from '../../Services/back-end.services';
import { Bidder } from '../../Models/admin-bidder-model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-submission',
  templateUrl: './admin-submission.component.html',
  styleUrls: ['./admin-submission.component.css']
})
export class AdminSubmissionComponent implements OnInit {
  form!: FormGroup;
  index: number = 0;
 
  isSubmitted:boolean=false;
  constructor(public submissionService: SubmissionService,
    private router: Router,
    private route: ActivatedRoute,
    private backEndService: BackEndService,
    
    
    ) { }

  ngOnInit(): void {
    let awardedBidder= '';
    let bidderName='';
    let bidderAmount='';


     this.route.params.subscribe((params: Params)=>{
     if(params['index']){
        console.log(params['index']);

       this.index = params['index'];

        const bidder= this.submissionService.getBidder(this.index);
        awardedBidder =  bidder.awardedBidder;
        bidderName =  bidder.bidderName;
        bidderAmount= bidder.bidderAmount;
     
        
     }
     });

this.form = new FormGroup({
awardedBidder: new FormControl(awardedBidder,[Validators.required]),
bidderName: new FormControl(bidderName, [Validators.required]),
bidderAmount: new FormControl(bidderAmount, Validators.required),

}) 

} 
onSubmit() {
    this.isSubmitted=true;
  const awarededbidder = this.form.value.awardedBidder;
  const bidderName = this.form.value.bidderName;
  const bidderAmount = this.form.value.bidderAmount;


   //Object
   const bidder: Bidder = new Bidder(
    awarededbidder,
    bidderName,
    bidderAmount,
 

  );
  //Calling a service


//condition to either add or edit
   
  this.submissionService.addBidder(bidder);
  console.log("SaveBidder() called!!!! ");
  this.backEndService.saveBidder();
}


  
  get formControls(){
    return this.form['controls'];
  }

}
