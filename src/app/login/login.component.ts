import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserData = {};
  unsuccessLogin = false;
  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          localStorage.setItem('userFullName', res.firstName+" "+res.lastName);
          this.router.navigateByUrl('/welcome');
        },
        err => {
          if (err.status === 401) {
            this.unsuccessLogin = true;
          }
          console.log(err)
        }
      )
  }
}
