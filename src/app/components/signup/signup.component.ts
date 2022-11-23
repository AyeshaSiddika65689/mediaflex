import { Component, OnInit } from '@angular/core';

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
    number:'',
    role:'user'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
