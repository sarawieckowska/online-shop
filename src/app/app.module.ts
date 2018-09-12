import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { HistoryComponent } from './view/history/history.component';
import { PaymentComponent } from './view/payment/payment.component';
import { MyAccountComponent } from './view/my-account/my-account.component';
import { CategoriesComponent } from './view/categories/categories.component';
import { CookiesComponent } from './footer/footerComponents/cookies/cookies.component';
import { FooterComponent } from './footer/footer.component';
import { AppBootstrapModule } from './AppBootstrapModule';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToElementDirective } from './directives/scroll-to-element.directive';
import { FirstHeaderComponent } from './header/first-header/first-header.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AppBootstrapModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    routingComponents,
    HistoryComponent,
    PaymentComponent,
    MyAccountComponent,
    CategoriesComponent,
    CookiesComponent,
    FooterComponent,
    HeaderComponent,
    ScrollToElementDirective,
    FirstHeaderComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
