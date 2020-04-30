import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-add-loc',
  templateUrl: './add-loc.component.html',
  styleUrls: ['./add-loc.component.scss'],
  providers: [{
    provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }],
  // encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  // preserveWhitespaces: false,
})
export class AddLocComponent implements OnInit {

  applicant;
  activeTabIndex=0;
  constructor(private _fb:FormBuilder) { }

  locForm:FormGroup;
  partiesForm:FormGroup;
  ngOnInit() {
  this.locForm=this._fb.group({
    lc_no:[''],
    contract_no:[''],
    date_of_issue:[''],
    date_of_leave:[''],
    amount:[''],
    desc_goods:[''],
    perc_tol:[''],
    applicant:[''],
    benificiary:[''],
    cosignee:[''],
    notify_party:[''],
    draft_at:[''],
    drawee_bankcode:[''],
    drawee:[''],
    enter:[''],
    address:[''],
    city:[''],
    state:[''],
    zipcode:[''],
    comment:['']
  })
  this.partiesForm=this._fb.group({
    applicant:[''],
    address:this._fb.group({
      city:[''],
      state:[''],
      address:[''],
      zipcode:['']
    }),
  cosignee:[''],
  address1:this._fb.group({
    city:[''],
    state:[''],
    address:[''],
    zipcode:['']
  }),
  notify_party:[''],
  address2:this._fb.group({
    city:[''],
    state:[''],
    address:[''],
    zipcode:['']
  }),
benificiary:[''],
  address3:this._fb.group({
    city:[''],
    state:[''],
    address:[''],
    zipcode:['']
  }),
  })
  }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'ABC Company'},
    {value: 'pizza-1', viewValue: 'XYZ Company'},
    {value: 'tacos-2', viewValue: 'PQR Company'}
  ];

}
interface Food {
  value: string;
  viewValue: string;
}