import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './myAccount/sign-in/sign-in.component';
import { SignUpComponent } from './myAccount/sign-up/sign-up.component';
import { BasketComponent } from './myAccount/myAccountComponents/basket/basket.component';
import { AccountDetailsComponent } from './myAccount/myAccountComponents/account-details/account-details.component';
import { HistoryComponent } from './myAccount/myAccountComponents/history/history.component';
import { PaymentComponent } from './myAccount/myAccountComponents/payment/payment.component';
import { MyAccountComponent } from './myAccount/my-account/my-account.component';
import { CategoriesComponent } from './main/categories/categories.component';
import { CookiesComponent } from './main/footerComponents/cookies/cookies.component';
import { FooterComponent } from './main/footer/footer.component';
import { CompanyInfoComponent } from './main/footerComponents/company-info/company-info.component';
import { NewsComponent } from './main/footerComponents/news/news.component';
import { CareersComponent } from './main/footerComponents/careers/careers.component';
import { PolicyComponent } from './main/footerComponents/policy/policy.component';
import { UserAgreementComponent } from './main/footerComponents/user-agreement/user-agreement.component';
import { CookieNoticeComponent } from './main/cookie-notice/cookie-notice.component';
import { HelpComponent } from './main/footerComponents/help/help.component';
import { ReturnPolicyComponent } from './main/footerComponents/return-policy/return-policy.component';
import { DeliveryMethodsComponent } from './main/footerComponents/delivery-methods/delivery-methods.component';
import { ContactUsComponent } from './main/footerComponents/contact-us/contact-us.component';
import { AppBootstrapModule } from './AppBootstrapModule';
import { HeaderComponent } from './main/header/header.component';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AppBootstrapModule,
    FormsModule
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
