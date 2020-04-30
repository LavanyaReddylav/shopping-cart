import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Layout3RoutingModule } from './layout3-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../datagrid/material.module';


@NgModule({
  declarations: [LoginComponent, ForgotComponent, SignUpComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    Layout3RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class Layout3Module { }
