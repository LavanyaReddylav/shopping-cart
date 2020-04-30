import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatagridRoutingModule } from './datagrid-routing.module';
import { TableComponent } from './table/table.component';
import { MaterialModule } from './material.module';
import { Ng2TableComponent } from './ng2-table/ng2-table.component';
import { LookupComponent } from './lookup/lookup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [TableComponent, Ng2TableComponent, LookupComponent],
  imports: [
    CommonModule,
    DatagridRoutingModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule
    // Ng2SmartTableModule
  ]
})
export class DatagridModule { }
