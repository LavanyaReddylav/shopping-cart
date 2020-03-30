import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Login1Component } from './login1/login1.component';
import { SignupComponent } from './signup/signup.component';  

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    ForgotPasswordComponent,
    Login1Component,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
