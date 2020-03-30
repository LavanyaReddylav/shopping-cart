import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Layout3RoutingModule } from './layout3-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    Layout3RoutingModule
  ]
})
export class Layout3Module { }
