import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as config from '../../config/config';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

@Injectable()
export class SignInComponent implements OnInit {
  Email: string;
  Password: string;
  login() {
    this.http.post(config.default.mantle.login, {email: this.Email, password: this.Password}).toPromise()
      .then(function (response) {
        console.log(response);
      }).catch(function (error) {
      console.log(error);
    });
    console.log('cokolwiek');
  }

  constructor(private http: HttpClient) {}

ngOnInit() {
}

}
