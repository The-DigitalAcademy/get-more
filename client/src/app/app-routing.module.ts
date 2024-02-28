import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { AddProductComponent } from './pages/add-product/add-product.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dash',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path:'edit/:id',
        component: UpdateProfileComponent,
      },
      {
        path: 'addproduct',
        component: AddProductComponent
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
