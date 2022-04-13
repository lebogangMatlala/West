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
    private login: LoginService,
    
   ) { }

   ngOnInit(): void {}

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  submit(){
    if (!this.loginForm.valid){
      return;
    }
const { email, password} = this.loginForm.value;
this.login.login(email, password).pipe(
  this.toast.observe({
    success: 'Logged in successfully',
    loading: 'Loggin in...',
    error: 'There was an error'

  })
).subscribe(()=>{
  this.router.navigate(['/dashboard']);
}
)

  }


}
