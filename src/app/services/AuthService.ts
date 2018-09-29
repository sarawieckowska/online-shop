import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  User: User = new User({});
  isSignedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  constructor(public jwtHelper: JwtHelperService) {}
  signIn(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isSignedIn = true)
    );
  }
  logout(): void {
    this.isSignedIn = false;
  }
  isLoggedIn: any = () => {
    return true;
  }
  getUser: any = () => {
    return this.User;
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
}
