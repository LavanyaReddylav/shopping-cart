import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ExcelService } from 'src/app/datagrid/services/excel.service';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { AddLocComponent } from '../model/add-loc/add-loc.component';

interface Food {
  value: string;
  viewValue: string;
}

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

  displayedColumns: string[] = ['select','position', 'company', 'contract_no', 'loc_no','tolerance','created_by','amount','description','opened','closed'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
@ViewChild('content',{static:true}) content:ElementRef;
@ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor(private _excel:ExcelService,public dialog: MatDialog) { }

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
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    }
}

 openDialog(): void {
    const dialogRef = this.dialog.open(AddLocComponent, {
      width: '850px',
      height:'570px'
      // data: {name: this.name, animal: this.animal}
    });
  }


  export(){
    this._excel.exportAsExcelFile(this.dataSource.data, 'Data');
  }
  public downloadAsPDF() {
    const doc = new jspdf();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const pdfTable = this.pdfTable.nativeElement;

    doc.fromHTML(pdfTable.innerHTML, 4, 4, {
      width: 250,
      'elementHandlers': specialElementHandlers
    });

    doc.save('tableToPdf.pdf');
  }
  captureScreen()      {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight,pageHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
  }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'CU - Export Customer'},
    {value: 'pizza-1', viewValue: 'CG - Cosignee'},
    {value: 'tacos-2', viewValue: 'NP - Notify Party'},
    {value: 'tacos-2', viewValue: 'SH - Shipper'},
  ];
  
  status: Status[] = [
    {value: 'tacos-2', viewValue: 'All'},
    {value: 'steak-0', viewValue: 'Opened'},
    {value: 'pizza-1', viewValue: 'Closed'}
  ];
}

export interface PeriodicElement {
position:number;
company:string;
contract_no: number;
loc_no: number;
tolerance: number;
created_by: string;
amount:string;
description:string;
opened:string;
closed:string;

}

const ELEMENT_DATA: PeriodicElement[] = [
{position:1,company:'ABC',contract_no:1123123,loc_no:1232332,tolerance:11,created_by:'ABC',
amount:'$123',description:'Almond Shell',opened:'11/12/2019',closed:'12/12/2019'},
{position:2,company:'PQR',contract_no:1123124,loc_no:1232333,tolerance:13,created_by:'PQR',
amount:'$103',description:'Almond Shell',opened:'11/12/2019',closed:'12/12/2019'},
{position:3,company:'XYZ',contract_no:1123126,loc_no:1232378,tolerance:13,created_by:'XYZ',
amount:'$193',description:'Almond Shell',opened:'11/12/2019',closed:'12/12/2019'},
{position:4,company:'RYY',contract_no:1123904,loc_no:1232356,tolerance:19,created_by:'RYY',
amount:'$193',description:'Almond Shell',opened:'11/12/2019',closed:'12/12/2019'},
{position:5,company:'CDD',contract_no:1123967,loc_no:1232396,tolerance:18,created_by:'CDD',
amount:'$198',description:'Almond Shell',opened:'11/12/2019',closed:'12/12/2019'},
{position:6,company:'ABC',contract_no:1123123,loc_no:1232332,tolerance:11,created_by:'ABC',
amount:'$123',description:'Almond Shell',opened:'11/12/2019',closed:'12/12/2019'},
{position:7,company:'PQR',contract_no:1123124,loc_no:1232333,tolerance:13,created_by:'PQR',
amount:'$103',description:'Almond Shell',opened:'11/12/2019',closed:'12/12/2019'},
{position:8,company:'XYZ',contract_no:1123126,loc_no:1232378,tolerance:13,created_by:'XYZ',
amount:'$193',description:'Almond Shell',opened:'11/12/2019',closed:'12/12/2019'},
{position:9,company:'RYY',contract_no:1123904,loc_no:1232356,tolerance:19,created_by:'RYY',
amount:'$193',description:'Almond Shell',opened:'11/12/2019',closed:'12/12/2019'},
{position:10,company:'CDD',contract_no:1123967,loc_no:1232396,tolerance:18,created_by:'CDD',
amount:'$198',description:'Almond Shell',opened:'11/12/2019',closed:'12/12/2019'},
];
