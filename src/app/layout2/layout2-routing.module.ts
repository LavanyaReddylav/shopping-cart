import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { Login1Component } from './login1/login1.component';


const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'forgot',component:ForgotComponent},
{path:'login1',component:Login1Component},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Layout2RoutingModule { }
