import { Component, OnInit } from '@angular/core';
import { AddBookingComponent } from '../add-booking/add-booking.component';
import { MatDialog } from '@angular/material';


interface Status {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.openDialog()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddBookingComponent, {
      width: '850px',
      height:'500px'
      // data: {name: this.name, animal: this.animal}
    });
  }

  status: Status[] = [
    {value: 'tacos-2', viewValue: 'All'},
    {value: 'steak-0', viewValue: 'Opened'},
    {value: 'pizza-1', viewValue: 'Closed'}
  ];
}
