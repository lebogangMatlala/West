import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  firsttime: string = "true";

  constructor(public authService:AuthService,private _router: Router) { }

  ngOnInit(): void {

    let firsttime = localStorage.getItem("firsttime");

    if (
      localStorage.getItem("firsttime") == null ||
      localStorage.getItem("firsttime") == undefined
    ) {
      this.firsttime = 'true';
      localStorage.setItem("firsttime", "true");
    } else localStorage.setItem("firsttime", "false");
  }

  navigateTohome() {
    this._router.navigate(['home'])
  }


}
