import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-cookie-notice',
  templateUrl: './cookie-notice.component.html',
  styleUrls: ['./cookie-notice.component.scss']
})
export class CookieNoticeComponent implements OnInit {

  constructor(
    private location: Location
  ) {}

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }
}
