import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as config from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class Categories {
  getCategories() {
    return this.http.get(config.default.mantle.categoriesList).toPromise();
  }


  constructor(private http: HttpClient) {
  }
}
