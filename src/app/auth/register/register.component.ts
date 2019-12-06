import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  ShowLoading: boolean;
  constructor(private authService: AuthService, private router: Router) {
    this.ShowLoading = false;
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.ShowLoading = true;
    this.authService.register(form.value["email"], form.value["password"]).subscribe(
      data => {
        this.ShowLoading = false;
        this.router.navigateByUrl("auth");
      },
      error => {
        this.ShowLoading = false;
      }
    );
  }
}
