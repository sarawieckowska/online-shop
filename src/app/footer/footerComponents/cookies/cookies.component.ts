import { Component, Injector, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../../services/AuthService';
import { User } from '../../../models/User';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss'],
  providers: [AuthService]
})
export class CookiesComponent implements OnInit {
  user: User;
  @Output() cookiesAccepted = new EventEmitter<boolean>();
  acceptCookies: any = () => {
    this.user.acceptCookies();
    this.cookiesAccepted.emit(this.user.isCookiesAccepted);
  };
  constructor (private injector: Injector) {}

  ngOnInit() {
    const Auth = this.injector.get(AuthService);
    if (Auth.isLoggedIn()) {
      this.user = Auth.getUser();
    }
  }
}
