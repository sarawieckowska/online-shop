import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

@Injectable()
export class SignInComponent implements OnInit {
  getConfig() {
    console.log(this.http);
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
