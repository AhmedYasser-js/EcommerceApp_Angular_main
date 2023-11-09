// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './components/home/home.component';
// import { ProductsComponent } from './components/products/products.component';
// import { CartComponent } from './components/cart/cart.component';
// import { BrandsComponent } from './components/brands/brands.component';
// import { CategoriesComponent } from './components/categories/categories.component';
// import { NavbarBlankComponent } from './components/navbar-blank/navbar-blank.component';
// import { NavbarAuthComponent } from './components/navbar-auth/navbar-auth.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { NotfoundComponent } from './components/notfound/notfound.component';
// import { RegisterComponent } from './components/register/register.component';
// import { LoginComponent } from './components/login/login.component';
// import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
// import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { CutTextPipe } from './service/cut-text.pipe';
// import { DetailsproductComponent } from './components/detailsproduct/detailsproduct.component';
// import { CarouselModule } from 'ngx-owl-carousel-o';
// import { PaymentComponent } from './components/payment/payment.component';
// import { AllordersComponent } from './components/allorders/allorders.component';
// import { ToastrModule } from 'ngx-toastr';
// import { MyhttpInterceptor } from './myhttp.interceptor';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
// import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { NgxSpinnerModule } from 'ngx-spinner';
// import { LoadingInterceptor } from './loading.interceptor';
// import { SearchPipe } from './search.pipe';
// import { CategoryDetailsComponent } from './category-details/category-details.component';
// import { BrandsDetailsComponent } from './brands-details/brands-details.component';
// import { WishListComponent } from './components/wish-list/wish-list.component';
// import { TestComponent } from './components/test/test.component';
// import { MaterialModule } from './material/material/material.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     ProductsComponent,
//     CartComponent,
//     BrandsComponent,
//     CategoriesComponent,
//     NavbarBlankComponent,
//     NavbarAuthComponent,
//     FooterComponent,
//     NotfoundComponent,
//     RegisterComponent,
//     LoginComponent,
//     AuthLayoutComponent,
//     BlankLayoutComponent,
//     CutTextPipe,
//     DetailsproductComponent,
//     PaymentComponent,
//     AllordersComponent,
//     ForgotPasswordComponent,
//     ResetPasswordComponent,
//     SearchPipe,
//     CategoryDetailsComponent,
//     BrandsDetailsComponent,
//     WishListComponent,
//     TestComponent,

//     // CustomPaginationComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     ReactiveFormsModule,
//     HttpClientModule,
//     CarouselModule,
//     ToastrModule.forRoot(),
//     NgxPaginationModule,
//     FormsModule,
//     NgxSpinnerModule,
//     MaterialModule,
//     BrowserAnimationsModule
//   ],
//   exports: [CutTextPipe],
//   providers: [
//     { provide: HTTP_INTERCEPTORS, useClass: MyhttpInterceptor, multi: true },
//     { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material/material.module';

import { MyhttpInterceptor } from './myhttp.interceptor';
import { LoadingInterceptor } from './loading.interceptor';

import { CutTextPipe } from './service/cut-text.pipe';
import { SearchPipe } from './search.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NavbarBlankComponent } from './components/navbar-blank/navbar-blank.component';
import { NavbarAuthComponent } from './components/navbar-auth/navbar-auth.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { DetailsproductComponent } from './components/detailsproduct/detailsproduct.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { BrandsDetailsComponent } from './brands-details/brands-details.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { TestComponent } from './components/test/test.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'; // Add this import

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    BrandsComponent,
    CategoriesComponent,
    NavbarBlankComponent,
    NavbarAuthComponent,
    FooterComponent,
    NotfoundComponent,
    RegisterComponent,
    LoginComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    CutTextPipe,
    DetailsproductComponent,
    PaymentComponent,
    AllordersComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    SearchPipe,
    CategoryDetailsComponent,
    BrandsDetailsComponent,
    WishListComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    FormsModule,
    NgxSpinnerModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyhttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

// @NgModule({
//   providers: [
//     {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
//   ]
// })


