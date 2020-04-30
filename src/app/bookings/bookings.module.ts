import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';
import { MasterComponent } from './master/master.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBookingComponent } from './add-booking/add-booking.component';


@NgModule({
  declarations: [BookingsComponent, MasterComponent, AddBookingComponent],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[AddBookingComponent]
})
export class BookingsModule { }
