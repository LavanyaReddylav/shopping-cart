import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatagridRoutingModule } from './datagrid-routing.module';
import { TableComponent } from './table/table.component';
import { MaterialModule } from './material.module';
import { Ng2TableComponent } from './ng2-table/ng2-table.component';


@NgModule({
  declarations: [TableComponent, Ng2TableComponent],
  imports: [
    CommonModule,
    DatagridRoutingModule,
    MaterialModule,
    // Ng2SmartTableModule
  ]
})
export class DatagridModule { }
