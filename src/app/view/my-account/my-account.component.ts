import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/AuthService';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  isUserAuthenticated(): boolean {
    return this.authService.isLoggedIn();
  }
  logout(): void {
    this.authService.logout();
  }
}
