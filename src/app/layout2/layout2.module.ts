import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Layout2RoutingModule } from './layout2-routing.module';
import { Layout2Component } from './layout2.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { Login1Component } from './login1/login1.component';


@NgModule({
  declarations: [Layout2Component, LoginComponent, ForgotComponent, Login1Component],
  imports: [
    CommonModule,
    Layout2RoutingModule
  ]
})
export class Layout2Module { }
