import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { Ng2TableComponent } from './ng2-table/ng2-table.component';


const routes: Routes = [
  {path:'table',component:TableComponent},
  {path:'ng2-table',component:Ng2TableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatagridRoutingModule { }
