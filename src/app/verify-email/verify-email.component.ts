import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(public authService:AuthService,
    public _router:Router) { }

  ngOnInit(): void {
  }

  navigateTosignin() {
    this._router.navigate(['signin']);
    window.location.reload();
  }
}
