import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../../services/windowRef';

@Component({
  selector: 'app-cookie-notice',
  templateUrl: './cookie-notice.component.html',
  styleUrls: ['./cookie-notice.component.scss']
})
export class CookieNoticeComponent implements OnInit {
  window: WindowRef;

  constructor() {
    this.window = new WindowRef();
  }

  ngOnInit() {
  }
  goBack(): void {
    this.window.nativeWindow.scrollTo(0, 0);
  }
}
