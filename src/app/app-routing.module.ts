import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './myAccount/sign-in/sign-in.component';
import { SignUpComponent } from './myAccount/sign-up/sign-up.component';
import {CompanyInfoComponent} from './main/footerComponents/company-info/company-info.component';
import {PolicyComponent} from './main/footerComponents/policy/policy.component';
import {UserAgreementComponent} from './main/footerComponents/user-agreement/user-agreement.component';
import {CookieNoticeComponent} from './main/cookie-notice/cookie-notice.component';
import {HelpComponent} from './main/footerComponents/help/help.component';
import {ReturnPolicyComponent} from './main/footerComponents/return-policy/return-policy.component';
import {DeliveryMethodsComponent} from './main/footerComponents/delivery-methods/delivery-methods.component';
import {ContactUsComponent} from './main/footerComponents/contact-us/contact-us.component';

const routes: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'company', component: CompanyInfoComponent },
  { path: 'policies', component: PolicyComponent },
  { path: 'user-agreement', component: UserAgreementComponent },
  { path: 'cookie-notice', component: CookieNoticeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'return-policy', component: ReturnPolicyComponent },
  { path: 'delivery-methods', component: DeliveryMethodsComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
