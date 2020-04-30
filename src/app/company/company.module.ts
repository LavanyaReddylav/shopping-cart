import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { MasterComponent } from './master/master.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddCompanyComponent } from './model/add-company/add-company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CompanyComponent, MasterComponent, AddCompanyComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[AddCompanyComponent]
})
export class CompanyModule { }
