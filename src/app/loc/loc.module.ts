import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocRoutingModule } from './loc-routing.module';
import { LocComponent } from './loc.component';
import { MasterComponent } from './master/master.component';
import { AddLocComponent } from './model/add-loc/add-loc.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [LocComponent, MasterComponent, AddLocComponent],
  imports: [
    CommonModule,
    LocRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  entryComponents:[AddLocComponent]
})
export class LocModule { }
