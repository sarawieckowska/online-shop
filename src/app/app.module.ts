import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BasketComponent } from './basket/basket.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { HistoryComponent } from './history/history.component';
import { PaymentComponent } from './payment/payment.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CategoriesComponent } from './categories/categories.component';
import { CookiesComponent } from './cookies/cookies.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { NewsComponent } from './news/news.component';
import { CareersComponent } from './careers/careers.component';
import { PolicyComponent } from './policy/policy.component';
import { UserAgreementComponent } from './user-agreement/user-agreement.component';
import { CookieNoticeComponent } from './cookie-notice/cookie-notice.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule
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
    CookieNoticeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
