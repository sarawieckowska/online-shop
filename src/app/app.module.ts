import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './view/sign-in/sign-in.component';
import { SignUpComponent } from './view/sign-up/sign-up.component';
import { BasketComponent } from './view/basket/basket.component';
import { AccountDetailsComponent } from './view/account-details/account-details.component';
import { HistoryComponent } from './view/history/history.component';
import { PaymentComponent } from './view/payment/payment.component';
import { MyAccountComponent } from './view/my-account/my-account.component';
import { CategoriesComponent } from './view/categories/categories.component';
import { CookiesComponent } from './footer/footerComponents/cookies/cookies.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyInfoComponent } from './footer/footerComponents/company-info/company-info.component';
import { NewsComponent } from './footer/footerComponents/news/news.component';
import { CareersComponent } from './footer/footerComponents/careers/careers.component';
import { PolicyComponent } from './footer/footerComponents/policy/policy.component';
import { UserAgreementComponent } from './footer/footerComponents/user-agreement/user-agreement.component';
import { CookieNoticeComponent } from './view/cookie-notice/cookie-notice.component';
import { HelpComponent } from './footer/footerComponents/help/help.component';
import { ReturnPolicyComponent } from './footer/footerComponents/return-policy/return-policy.component';
import { DeliveryMethodsComponent } from './footer/footerComponents/delivery-methods/delivery-methods.component';
import { ContactUsComponent } from './footer/footerComponents/contact-us/contact-us.component';
import { AppBootstrapModule } from './AppBootstrapModule';
import { HeaderComponent } from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AppBootstrapModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    BasketComponent,
    AccountDetailsComponent,
    HistoryComponent,
    PaymentComponent,
    MyAccountComponent,
    CategoriesComponent,
    CookiesComponent,
    FooterComponent,
    CompanyInfoComponent,
    NewsComponent,
    CareersComponent,
    PolicyComponent,
    UserAgreementComponent,
    CookieNoticeComponent,
    HelpComponent,
    ReturnPolicyComponent,
    DeliveryMethodsComponent,
    ContactUsComponent,
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
