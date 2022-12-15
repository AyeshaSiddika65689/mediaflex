import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupInfo={
    name:'',
    email: '',
    password:'',
    phone:'',
    
  }

  constructor(private _auth: AuthService, private router: Router, private dialogePopUp:MatDialog) { }

  ngOnInit(): void {}
  //signup function
  signUp() {
    console.log(this.signupInfo);
    this._auth.userSignUp(this.signupInfo).subscribe((res) => {
      console.log(res);
      alert('Account Registered Successfully');
      this.router.navigate(['login']);
    }, err=>{
      alert("Email already registered")
      console.log(err);
    });
  }
}
