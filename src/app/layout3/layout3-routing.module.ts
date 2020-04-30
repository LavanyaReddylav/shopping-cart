import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'signup',component:SignUpComponent},
  {path:'change',component:ChangePasswordComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Layout3RoutingModule { }
