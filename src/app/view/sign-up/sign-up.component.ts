import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as config from '../../config/config';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  Name: string;
  Email: string;
  Password: string;
  register() {
    this.http.post(config.default.mantle.register,
      {name: this.Name, email: this.Email, password: this.Password}).toPromise()
      .then(function (response) {
        console.log(response);
      }).catch(function (error) {
      console.log(error);
    });
    console.log('cokolwiek');
  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
}
