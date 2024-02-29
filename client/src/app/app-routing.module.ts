import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';

import { AdminPageComponent } from './pages/admin/admin/admin-page/admin-page.component';

import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { ViewPageComponent } from './pages/view-page/view-page.component';


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
        path: 'edit/:id',
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
        path: 'admin',
        component: AdminPageComponent,
      },
      {
        path: 'view',
        component: ViewPageComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
