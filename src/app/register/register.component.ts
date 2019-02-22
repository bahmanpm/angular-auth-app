import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  succession = false;

  registerUserData = {}

  constructor(private _auth: AuthService, private formBuilder: FormBuilder) {
   
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]]
  });

}

get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    if (this.registerForm.invalid) {
      return;
    } else {

      this.registerUserData = {
        "firstName":this.registerForm.get('firstName').value,
        "lastName":this.registerForm.get('lastName').value,
        "email":this.registerForm.get('email').value,
        "password":this.registerForm.get('password').value
      }

      this._auth.registerUser(this.registerUserData)
        .subscribe(
          res => this.succession = true,
          err => console.log(err)
        )
    }

  }

}
