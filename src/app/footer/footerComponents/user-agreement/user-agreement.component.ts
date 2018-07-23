import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../../../services/windowRef';
import { ScrollToId } from '../../../services/scrollToId';

@Component({
  selector: 'app-user-agreement',
  templateUrl: './user-agreement.component.html',
  styleUrls: ['./user-agreement.component.scss']
})
export class UserAgreementComponent implements OnInit {
  window: WindowRef;

  constructor() {
    this.window = new WindowRef();
  }

  ngOnInit() {
  }
  goBack(): void {
    this.window.nativeWindow.scrollTo(0, 0);
  }
  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: 'instant', block: 'start', inline: 'nearest'});
  }
}
