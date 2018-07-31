import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AccountDetailsComponent } from './view/account-details/account-details.component';
import { HistoryComponent } from './view/history/history.component';
import { PaymentComponent } from './view/payment/payment.component';
import { MyAccountComponent } from './view/my-account/my-account.component';
import { CategoriesComponent } from './view/categories/categories.component';
import { CookiesComponent } from './footer/footerComponents/cookies/cookies.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './footer/footerComponents/news/news.component';
import { CareersComponent } from './footer/footerComponents/careers/careers.component';
import { AppBootstrapModule } from './AppBootstrapModule';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToElementDirective } from './directives/scroll-to-element.directive';


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
    routingComponents,
    AccountDetailsComponent,
    HistoryComponent,
    PaymentComponent,
    MyAccountComponent,
    CategoriesComponent,
    CookiesComponent,
    FooterComponent,
    NewsComponent,
    CareersComponent,
    HeaderComponent,
    ScrollToElementDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
