import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as config from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class Agreement {
  getAgreement() {
    return this.http.get(config.default.mantle.agreements).toPromise();
  }


  constructor(private http: HttpClient) {
  }
}
