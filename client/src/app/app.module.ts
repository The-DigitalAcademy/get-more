import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';

import { TabsComponent } from './pages/tabs/tabs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MytabsComponent } from './ui/mytabs/mytabs.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { CategoriesComponent } from './ui/categories/categories.component';
import { ProductComponent } from './ui/product/product.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { AdminPageComponent } from './pages/admin/admin/admin-page/admin-page.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { ViewPageComponent } from './pages/view-page/view-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TabsComponent,
    MytabsComponent,
    CartComponent,
    ProfileComponent,
    CategoriesComponent,
    ProductComponent,
    UpdateProfileComponent,
    AdminPageComponent,
    AddProductComponent,
    ViewPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'increasing',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
