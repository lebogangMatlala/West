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

  constructor() { }

  ngOnInit(): void {
  }

}
