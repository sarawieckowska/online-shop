import { Component, OnInit } from '@angular/core';
import {WindowRef} from '../../../services/windowRef';

@Component({
  selector: 'app-delivery-methods',
  templateUrl: './delivery-methods.component.html',
  styleUrls: ['./delivery-methods.component.scss']
})
export class DeliveryMethodsComponent implements OnInit {
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
