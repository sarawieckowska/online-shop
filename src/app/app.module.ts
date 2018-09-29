import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { MyAccountComponent } from './view/my-account/my-account.component';
import { CategoriesComponent } from './view/categories/categories.component';
import { CookiesComponent } from './footer/footerComponents/cookies/cookies.component';
import { FooterComponent } from './footer/footer.component';
import { AppBootstrapModule } from './AppBootstrapModule';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FirstHeaderComponent } from './header/first-header/first-header.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AuthGuard } from './services/auth-guard.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './services/AuthService';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AppBootstrapModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200'],
        blacklistedRoutes: ['localhost:4200/auth/']
      }
    })
  ],
  declarations: [
    AppComponent,
    routingComponents,
    MyAccountComponent,
    CategoriesComponent,
    CookiesComponent,
    FooterComponent,
    HeaderComponent,
    FirstHeaderComponent,
    FilterPipe
  ],
  bootstrap: [AppComponent],
  providers: [AuthService, AuthGuard]
})
export class AppModule { }
