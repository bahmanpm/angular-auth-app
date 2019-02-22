import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  userFullName: String;
  constructor() { }

  ngOnInit() {
    this.userFullName = localStorage.getItem('userFullName');
  }

}
