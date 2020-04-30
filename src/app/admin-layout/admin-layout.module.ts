import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [NavBarComponent, SideBarComponent],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports:[NavBarComponent,SideBarComponent]
})

export class AdminLayoutModule { }
