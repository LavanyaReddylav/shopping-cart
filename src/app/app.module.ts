import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Login1Component } from './login1/login1.component';
import { SignupComponent } from './signup/signup.component';  
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';
import { NavBarComponent } from './admin-layout/nav-bar/nav-bar.component';
import { SideBarComponent } from './admin-layout/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    Login1Component,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    // DragDropModule,
    AdminLayoutModule
  ],

  providers: [],
  entryComponents:[NavBarComponent,SideBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
