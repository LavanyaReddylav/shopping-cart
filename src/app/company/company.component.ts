import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit,AfterViewInit {
  userDetails:any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  this.userDetails = {
      name: {
        first: 'nani',
        age: '25',
        JobDetails: {
          company: true
        }
      }
    }
  }
}
