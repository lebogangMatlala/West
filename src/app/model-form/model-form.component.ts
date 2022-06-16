import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

export class Friend{
  constructor(public id:string,public name:string,
    public surname:string, public email:string,
    ){}
}

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {


 //closeResult?:string;
  friends?: Friend[];

  closeResult = '';

  constructor(private modalService: NgbModal) {}
  form = new FormGroup({
    user_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    user_surname: new FormControl('',[Validators.required, Validators.minLength(3)]),
    user_email: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    user_phonenum: new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern("^((\\+27-?)|0)?[0-9]{10}$")]),
    user_skill: new FormControl('',[Validators.required, Validators.minLength(3)]),
    user_message: new FormControl('',[ Validators.required,Validators.minLength(3)])
  });

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }

  ngOnInit(){

  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_oq1xpvj', 'template_a4ug37g', e.target as HTMLFormElement, '77ouxA5YPKAh7e0BN')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
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

}
