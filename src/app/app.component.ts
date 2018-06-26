import {Component, Injector, OnInit} from '@angular/core';
import {AuthService} from './services/AuthService';
import {User} from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  user: User;
  isAccepted: any = () => {
    const auth = this.injector.get(AuthService);
    const user = auth.getUser();
    return user.isCookiesAccepted;
  }

  constructor(private injector: Injector) {}

  ngOnInit() {
    const Auth = this.injector.get(AuthService);
    if (Auth.isLoggedIn()) {
      this.user = Auth.getUser();
    }
  }
}
