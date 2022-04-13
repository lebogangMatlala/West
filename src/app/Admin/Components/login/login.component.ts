import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { LoginService } from '../../Services/login.service';
// import { AuthenticationService } from 'src/app/Admin/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });


  constructor(private router: Router,
    private toast: HotToastService,
    private login: LoginService
   ) { }

  ngOnInit(): void {
  }

}
