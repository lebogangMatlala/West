import { SenderService } from './../shared/sender-services/sender.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  formGroup: any;

  constructor(public authService: AuthService,
    private _router: Router,
    public senderService:SenderService) { }

  ngOnInit(): void {
    this.formGroup.reset();
  }

  navigateTosignin() {
    this._router.navigate(['signin']);
  }

}
