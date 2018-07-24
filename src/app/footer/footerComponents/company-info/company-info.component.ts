import { Component, OnInit } from '@angular/core';
import {WindowRef} from '../../../services/windowRef';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {
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
