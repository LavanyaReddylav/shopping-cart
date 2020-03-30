import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Login1Component } from './login1/login1.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'login1',component:Login1Component},
  {path:'signup',component:SignupComponent},
{  path: 'layout',
loadChildren: () => import('./layout1/layout1.module').then(m => m.Layout1Module)},
{  path: 'layout1',
loadChildren: () => import('./layout2/layout2.module').then(m => m.Layout2Module)},
{  path: 'layout2',
loadChildren: () => import('./layout3/layout3.module').then(m => m.Layout3Module)}
,
{  path: 'datagrid',
loadChildren: () => import('./datagrid/datagrid.module').then(m => m.DatagridModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
