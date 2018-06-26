import { Component, Injector, OnInit } from '@angular/core';
import { AuthService } from '../services/AuthService';
import { User } from '../models/User';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css'],
  providers: [AuthService]
})
export class CookiesComponent implements OnInit {
  user: User;
  acceptCookies: any = () => {
    this.user.acceptCookies();
    this.injector.get(AuthService).setUser(this.user);
  };
  constructor (private injector: Injector) {}

  ngOnInit() {
    const Auth = this.injector.get(AuthService);
    if (Auth.isLoggedIn()) {
      this.user = Auth.getUser();
    }
  }
}
