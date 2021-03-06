import { Component, Injector, OnInit } from '@angular/core';
import { WindowRef } from '../../../services/windowRef';
import { Agreement } from '../../../services/Agreement';

@Component({
  selector: 'app-user-agreement',
  templateUrl: './user-agreement.component.html',
  styleUrls: ['./user-agreement.component.scss'],
  providers: [Agreement]
})
export class UserAgreementComponent implements OnInit {
  window: WindowRef;
  agreement: any;

  constructor(private injector: Injector) {
    this.window = new WindowRef();
  }

  ngOnInit() {
    const self = this;
    const agreement = this.injector.get(Agreement);
    agreement.getAgreement()
      .then(function (response) {
        self.agreement = response;
      }).catch(function (error) {
      console.log(error);
    });
  }
  goBack(): void {
    this.window.nativeWindow.scrollTo(0, 0);
  }
  scrollToElement($element): void {
    document.getElementById($element).scrollIntoView({behavior: 'instant', block: 'start', inline: 'nearest'});
  }
}
