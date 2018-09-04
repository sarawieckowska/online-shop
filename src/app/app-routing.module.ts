import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './view/sign-in/sign-in.component';
import { SignUpComponent } from './view/sign-up/sign-up.component';
import { CompanyInfoComponent } from './footer/footerComponents/company-info/company-info.component';
import { PolicyComponent } from './footer/footerComponents/policy/policy.component';
import { UserAgreementComponent } from './footer/footerComponents/user-agreement/user-agreement.component';
import { CookieNoticeComponent } from './view/cookie-notice/cookie-notice.component';
import { HelpComponent } from './footer/footerComponents/help/help.component';
import { ReturnPolicyComponent } from './footer/footerComponents/return-policy/return-policy.component';
import { DeliveryMethodsComponent } from './footer/footerComponents/delivery-methods/delivery-methods.component';
import { ContactUsComponent } from './footer/footerComponents/contact-us/contact-us.component';
import { BasketComponent } from './view/basket/basket.component';
import { HomepageComponent } from './view/homepage/homepage.component';
import { ProductsComponent } from './view/products/products.component';

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
  { path: 'basket', component: BasketComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routingComponents = [SignInComponent, SignUpComponent, CompanyInfoComponent, PolicyComponent, UserAgreementComponent,
  CookieNoticeComponent, HelpComponent, ReturnPolicyComponent, DeliveryMethodsComponent, ContactUsComponent, BasketComponent,
  HomepageComponent, ProductsComponent];
