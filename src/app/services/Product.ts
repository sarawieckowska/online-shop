import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as config from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class Product {
  getProducts() {
    return this.http.get(config.default.mantle.products).toPromise();
  }
  constructor(private http: HttpClient) {
  }
}
