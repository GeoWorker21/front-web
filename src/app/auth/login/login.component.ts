import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ShowLoading: boolean;
  constructor(private authService: AuthService, private router: Router) {
    this.ShowLoading = false;
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.ShowLoading = true;
    this.authService.login(form.value["email"], form.value["password"]).subscribe(
      data => {
        this.ShowLoading = false;
        this.router.navigateByUrl("teams");
      },
      error => {
        this.ShowLoading = false;
        console.log('error', error);
      }
    );
  }
}
