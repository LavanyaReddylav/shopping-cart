import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Layout1RoutingModule } from './layout1-routing.module';
import { Layout1Component } from './layout1.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';


@NgModule({
  declarations: [Layout1Component, LoginComponent, SignupComponent, ForgotComponent],
  imports: [
    CommonModule,
    Layout1RoutingModule
  ]
})
export class Layout1Module { }
