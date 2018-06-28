import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CategoriesComponent } from './categories/categories.component';
import { CookiesComponent } from './cookies/cookies.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { BasketComponent } from './basket/basket.component';
import { HistoryComponent } from './history/history.component';
import { CookieNoticeComponent } from './cookie-notice/cookie-notice.component';

const routes: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'details', component: AccountDetailsComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'cookieNotice', component: CookieNoticeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
