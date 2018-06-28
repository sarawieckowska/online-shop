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
  isAccepted: boolean;
  onCookiesAccepted(accepted: boolean) {
    this.isAccepted = accepted;
  }

  constructor(private injector: Injector) {}

  ngOnInit() {
    this.isAccepted = false;
  }
}
