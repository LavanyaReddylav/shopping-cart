import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss'],
  providers: [{
    provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }],
  // encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class AddCompanyComponent implements OnInit {

  // constructor(private fb:FormBuilder) { }
  matcher = new MyErrorStateMatcher();
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  userForm:FormGroup;
  // ngOnInit() {

  //   this.userForm=this.fb.group({
  //     name:['',Validators.required],
  //     company_no:['',Validators.required],
  //     category:['',Validators.required],
  //     short_name:['',Validators.required],
  //     invoice:['',Validators.required],
  //     address:['',Validators.required],
  //     city:['',Validators.required],
  //     state:['',Validators.required],
  //     zipcode:['',Validators.required],
  //     office:['',Validators.required],
  //     fax:['',Validators.required],
  //     mobile:['',Validators.required],
  //     contact1:['',Validators.required],
  //     contact2:['',Validators.required],
  //     comment:['',Validators.required]
  //   })



  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      name:['',Validators.required],
      company_no:['',Validators.required],
      category:['',Validators.required],
      short_name:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      zipcode:['',Validators.required],
      contact1:['',Validators.required],
      contact2:['',Validators.required],
      comment:['',Validators.required]
    });

  }

}
