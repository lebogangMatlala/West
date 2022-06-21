import { Vacancy } from './../shared/Model/vacancy.model';
import { TenderService } from './../shared/services/tender.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SenderService } from '../shared/sender-services/sender.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-vaccancies',
  templateUrl: './vaccancies.component.html',
  styleUrls: ['./vaccancies.component.css']
})
export class VaccanciesComponent implements OnInit {

  vacancyInfo?: [];
  vacancies?: Vacancy[];
  index: any;
  listofVacancies?: any;
  vacanciesInfo?: Vacancy;
  closeResult = '';

  constructor(private breakpointObserver: BreakpointObserver,
    public senderService: SenderService,
    private _router: Router,
    public tenderService: TenderService,
    private modalService: NgbModal) { }


  ngOnInit(): void {
    this.index = this.senderService.getIndex();
    console.log(this.index);
    console.log(this.tenderService.getVacancy(this.index));
    this.listofVacancies = this.vacancies;
    console.log(this.listofVacancies);
    this.retrieveVacancies()
    this.vacanciesInfo=this.senderService.getVacancyInfo();
    console.log(this.vacanciesInfo);
  }

  form = new FormGroup({
    user_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    user_surname: new FormControl('',[Validators.required, Validators.minLength(3)]),
    user_email: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    user_phonenum: new FormControl('',[Validators.required]),
    user_skill: new FormControl('',[Validators.required]),
    user_message: new FormControl('',[ Validators.required,Validators.minLength(3)])
  });

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log('submit clicked')
    console.log(this.form.value);
  }


  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm('service_oq1xpvj', 'template_a4ug37g', e.target as HTMLFormElement, '77ouxA5YPKAh7e0BN')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.status);
        if(result.status==200)
        {
          window.alert("Email sent successfully");
        }

      }, (error: { text: any; }) => {
        console.log(error.text);
      });
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log('1.'+result)
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log('2.'+reason)
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  //retrieve vacancies
  retrieveVacancies(): void {
    this.tenderService.getAllVacancies().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.vacancies = data;
      console.log("This is the vacancies data" + this.vacancies)
    });
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
