import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TitlePageComponent } from './ui/title-page/title-page.component';
import { PrivateComponent } from './layout/private/private.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TitlePageComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
