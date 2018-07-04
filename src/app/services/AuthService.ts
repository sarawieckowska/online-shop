import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  User: User = new User({});
  isLoggedIn: any = () => {
    return true;
  }
  getUser: any = () => {
    return this.User;
  }
  setUser: any = (user: User) => {
    this.User = user;
  }
  constructor() { }

}
