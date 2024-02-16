import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from 'src/app/pages/signup/signup.component';
import { TitlePageComponent } from './ui/title-page/title-page.component';
import { PrivateComponent } from './layout/private/private.component';
import { LandingPageComponent } from './pages/customer/landing-page/landing-page.component';
import { ToolBarComponent } from './ui/tool-bar/tool-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    TitlePageComponent,
    PrivateComponent,
    LandingPageComponent,
    ToolBarComponent,
  ],

  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
