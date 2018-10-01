import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as config from '../../config/config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/AuthService';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  FirstName: string;
  Email: string;
  Password: string;
  registerForm: FormGroup;
  submitted = false;
  constructor(public http: HttpClient,
              private formBuilder: FormBuilder,
              public authService: AuthService,
              public router: Router) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  // on submit
  register() {
    this.http.post(config.default.mantle.register,
      {firstName: this.FirstName, email: this.Email, password: this.Password}).toPromise()
      .then(function (response) {
        console.log(response);
      }).catch(function (error) {
      console.log(error);
    });
    console.log('Registering.');
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }
  signIn() {
    this.authService.signIn().subscribe(() => {
      if (this.authService.isSignedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/login';

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
}

