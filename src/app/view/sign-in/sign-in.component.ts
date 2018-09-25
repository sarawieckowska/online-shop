import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as config from '../../config/config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/User';
import { AuthService } from '../../services/AuthService';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [AuthService]
})

@Injectable()
export class SignInComponent implements OnInit {
  Email: string;
  Password: string;
  loginForm: FormGroup;
  submitted = false;
  user: User;
  message: string;
  constructor(private http: HttpClient,
              private formBuilder: FormBuilder,
              public authService: AuthService,
              public router: Router) {
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  // on submit
  login() {
    this.http.post(config.default.mantle.login, {email: this.Email, password: this.Password}).toPromise()
      .then(function (response) {
        console.log(response);
      }).catch(function (error) {
      console.log(error);
    });
    console.log('cokolwiek');
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
  }
  signIn() {
    this.message = 'Logging in...';

    this.authService.signIn().subscribe(() => {
      if (this.authService.isSignedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/account-details';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }
  logout() {
    this.authService.logout();
  }
}
