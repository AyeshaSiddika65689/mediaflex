import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginInfo={
    email: '',
    password:'',
  }



constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  // User logs in
  loginUser() {
    this._auth.loginUser(this.loginInfo).subscribe(
      (res) => {
        alert('login successfull');
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        alert(`Invalid credentials, enter valid credential`);
        console.log(`Error occured`, err);
      }
    );
  }

  // Admin logs in
  loginAdmin() {
    this._auth.loginAdmin(this.loginInfo).subscribe(
      (res) => {
        alert('login successfull');
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        alert(`Invalid admin credentials, enter valid admin credential`);
        console.log(`Error occured`, err);
      }
    );
  }

  // Super Admin logs in
  loginSuperAdmin() {
    this._auth.loginSuperAdmin(this.loginInfo).subscribe(
      (res) => {
        alert('login successfull');
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        alert(`Invalid super admin credentials, enter valid super admin credential`);
        console.log(`Error occured`, err);
      }
    );
  }
}


