import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ExcelService } from 'src/app/datagrid/services/excel.service';

interface Contract {
  value: string;
  viewValue: string;
}
interface Status {
  value: string;
  viewValue: string;
}
interface SalesTerms{
  value: string;
  viewValue: string;
}
interface PaymentTerms{
  value: string;
  viewValue: string;
}
interface Commisioned{
  value: string;
  viewValue: string;
}
interface Container{
  value: string;
  viewValue: string;
}
interface Customer{
  value: string;
  viewValue: string;
}
interface Shipper{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss'],
})
export class AddBookingComponent implements OnInit {
 
 
  displayedColumns: string[] = ['select','position', 'container', 'type_size', 'commodity','price','packaging'
,'report_commidty','lbs','kgs','seal','loaded'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
@ViewChild('content',{static:true}) content:ElementRef;
@ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor(private _fb:FormBuilder,private _excel:ExcelService,public dialog: MatDialog) { }

  bookingForm:FormGroup;
  ngOnInit() {

this.bookingForm=this._fb.group({
            booking_no:[''],
            contract_no:[''],
            sales_order:[''],
            status:[''],
            sales_terms:[''],
            payment_terms:[''],
            comment:[''],
            commisioned:[''],
            container_hauler:[''],
            ton_commision:[''],
            customer:[''],
            shipper:[''],
            cosignee:[''],
            notify_party:[''],
            shipping_line:[''],
            vessel_name:[''],
            port_of_landig:[''],
            eta:[''],
            port_of_delivery:[''],
            etd:['']
     })
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
  }
   
 

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    }
}


  export(){
    this._excel.exportAsExcelFile(this.dataSource.data, 'Data');
  }
  contract: Contract[] = [
    {value: 'tacos-2', viewValue: '12412 | Contract1'},
    {value: 'steak-0', viewValue: '12312 | Contract2'},
    {value: 'pizza-1', viewValue: '12121 | Contract3'}
  ];

  status: Status[] = [
    {value: 'tacos-2', viewValue: 'All'},
    {value: 'steak-0', viewValue: 'Opened'},
    {value: 'pizza-1', viewValue: 'Closed'}
  ];
  sales: SalesTerms[] = [
    {value: 'tacos-2', viewValue: 'CNR'},
    {value: 'steak-0', viewValue: 'CFR'},
    {value: 'pizza-1', viewValue: 'CY'}
  ];
  payment: PaymentTerms[] = [
    {value: 'tacos-2', viewValue: 'Net 14 Days'},
    {value: 'steak-0', viewValue: 'Net 15 Days'},
    {value: 'pizza-1', viewValue: 'Net 30 Days'}
  ];
  commisioned: Commisioned[] = [
    {value: 'tacos-2', viewValue: 'ABC'},
    {value: 'steak-0', viewValue: 'PQR'},
    {value: 'pizza-1', viewValue: 'XYZ'}
  ];
  container_hauler: Container[] = [
    {value: 'tacos-2', viewValue: 'ABC'},
    {value: 'steak-0', viewValue: 'PQR'},
    {value: 'pizza-1', viewValue: 'XYZ'}
  ];
  foods: Customer[] = [
    {value: 'steak-0', viewValue: 'ABC Company'},
    {value: 'pizza-1', viewValue: 'XYZ Company'},
    {value: 'tacos-2', viewValue: 'PQR Company'}
  ];

  shipping: Shipper[] = [
    {value: 'steak-0', viewValue: 'China Shipping Ltd'},
    {value: 'pizza-1', viewValue: 'Hanjin Shipping Ltd'},
    {value: 'tacos-2', viewValue: 'Hundai Merchant Marine Co. Ltd'}
  ];
  arrival: Shipper[] = [
    {value: 'steak-0', viewValue: 'Okland USA Port'},
    {value: 'pizza-1', viewValue: 'Portland'},
    {value: 'tacos-2', viewValue: 'Osaka, Japan'}
  ];
  delivery: Shipper[] = [
    {value: 'steak-0', viewValue: 'Okland USA Port'},
    {value: 'pizza-1', viewValue: 'Portland'},
    {value: 'tacos-2', viewValue: 'Osaka, Japan'}
  ];
}
export interface PeriodicElement {
  container:string;
  type_size: string;
  commodity: string;
  price: string;
  packaging: string;
  report_commidty:string;
  lbs:number;
  kgs:number;
  seal:number;
  loaded:string;
  position:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position:1,container: '526726545', type_size: '40HC', commodity: 'Almond Shell', 
  price: '$130',packaging:'Bulk -grain Door',
  report_commidty:'Ground Almong Hull Feedrice',lbs:48.00,kgs:0.00,loaded:'yes',seal:1232212},

];