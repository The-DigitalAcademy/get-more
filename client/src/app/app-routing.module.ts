import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { PrivateComponent } from './layout/private/private.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LandingPageComponent } from './pages/customer/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: 'private',
    component: PrivateComponent,
    children: [
      { path: 'signin', component: LoginPageComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'home', component: LandingPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
