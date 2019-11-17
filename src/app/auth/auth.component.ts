import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public mode: string;

  constructor() { }

  ngOnInit() {
    this.mode = "login";
  }

  signUp() {
  }

  changeMode(mode: string) {
    this.mode = mode;
  }

}
