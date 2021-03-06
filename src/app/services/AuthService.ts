import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  User: User = new User({});
  isSignedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  constructor() {}
  signIn(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isSignedIn = true)
    );
  }
  logout(): void {
    delete localStorage.token;
  }
  isLoggedIn: any = () => {
    return localStorage.token && localStorage.token.length;
  }
  getUser: any = () => {
    return this.User;
  }
}
