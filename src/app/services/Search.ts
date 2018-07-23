import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as config from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class Search {
  getItems(params: any) {
    return this.http.get(config.default.mantle.items, {params: params}).toPromise();
  }


  constructor(private http: HttpClient) {
  }
}
