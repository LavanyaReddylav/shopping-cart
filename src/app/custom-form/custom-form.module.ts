import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFormRoutingModule } from './custom-form-routing.module';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DndModule } from 'ngx-drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [DynamicFormComponent],
  imports: [
    CommonModule,
    CustomFormRoutingModule,
    DragDropModule,
    DndModule,
    FormsModule,
    ReactiveFormsModule,
      
    // SweetAlert2Module
  ]
})
export class CustomFormModule { }
