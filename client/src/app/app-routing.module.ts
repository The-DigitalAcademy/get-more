import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { PrivateComponent } from './layout/private/private.component';
import { LoginPageComponent } from './pages/signin-page/login-page.component';

const routes: Routes = [
  {
    path: 'private',
    component: PrivateComponent,
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: '', component: SignupComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
