import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { TosComponent } from './tos/tos.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { HelpComponent } from './help/help.component';
import { ForgotComponent } from './forgot/forgot.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    TosComponent,
    DisclaimerComponent,
    HelpComponent,
    ForgotComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
