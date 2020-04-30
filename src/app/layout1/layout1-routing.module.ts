import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Layout1Component } from './layout1.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'login',component:Layout1Component},
  {path:'forgot',component:ForgotComponent},
  {path:'signup',component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Layout1RoutingModule { }
