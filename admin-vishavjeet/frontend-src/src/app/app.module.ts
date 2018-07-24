import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';
import { BrowserXhr, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-router.module';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NewpasswordComponent } from './components/newpassword/newpassword.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import { ActivateComponent } from './components/activate/activate.component';
import { LazyModule } from './lazy.module';
// import { ManageGroupComponent } from './components/manage-group/manage-group.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    NewpasswordComponent,
    ActivateComponent,
    // ManageGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    LazyModule,
    AppRoutingModule,
    RecaptchaModule.forRoot(),
    NgProgressModule
  ],
  providers: [AuthService, AuthGuardService,
    { provide: BrowserXhr, useClass: NgProgressBrowserXhr }],
  bootstrap: [AppComponent]
})
export class AppModule { }
