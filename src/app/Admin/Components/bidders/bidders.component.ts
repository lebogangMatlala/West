import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bidder } from '../../Models/admin-bidder-model';
import { BackEndService } from '../../Services/back-end.services';
import { SubmissionService } from '../../Services/submission.service';

@Component({
  selector: 'app-bidders',
  templateUrl: './bidders.component.html',
  styleUrls: ['./bidders.component.css']
})
export class BiddersComponent implements OnInit {
  @Input() bidder?: Bidder;
  @Input() index: number= 0 ;

  constructor(private submissionService: SubmissionService, private router: Router, private backEndService: BackEndService) { }

  ngOnInit(): void {
    console.log(this.bidder);
    console.log(this.index);
  }

}
