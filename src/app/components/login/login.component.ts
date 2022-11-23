import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginInfo={
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
