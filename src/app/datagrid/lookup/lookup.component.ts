import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  code: number;
  position: number;
  description: string;
  status: string;
  comment:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, description: 'Hull', code: 123622, status: 'Active',comment:''},
  {position: 2, description: 'Corn Meal', code: 700, status: 'Active',comment:''},
  {position: 3, description: 'Almond New Meal', code: 701, status: 'Active',comment:''},
  {position: 4, description: 'Almond Meal', code: 123123, status: 'Active',comment:''},
  {position: 5, description: 'Almond Shell', code:702, status: 'Active',comment:''},
]
@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})


export class LookupComponent implements OnInit {
  isView:boolean=true;
  displayedColumns: string[] = ['position', 'code', 'description', 'status','comment'];
  dataSource = ELEMENT_DATA;
  constructor() { }
 
  ngOnInit() {
  }
  change(){
    this.isView=!this.isView;
   var x=document.getElementsByClassName('others');
  

  }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Products'},
    {value: 'pizza-1', viewValue: 'Users'},
    {value: 'tacos-2', viewValue: 'Ports'},
    {value: 'steak-0', viewValue: 'Terminlas'},
    {value: 'pizza-1', viewValue: 'Counties'},
    {value: 'tacos-2', viewValue: 'TradeRules'}
  ];
}
interface Food {
  value: string;
  viewValue: string;
} 