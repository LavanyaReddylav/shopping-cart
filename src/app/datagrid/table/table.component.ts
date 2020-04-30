import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort,  } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ExcelService } from '../services/excel.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas'; 


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['select','position', 'id', 'name', 'no','status','category'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
@ViewChild('content',{static:true}) content:ElementRef;
@ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  selection = new SelectionModel<PeriodicElement>(true, []);

 
  constructor(private _excel:ExcelService) { }

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


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
}
export interface PeriodicElement {
  id:string;
  name: string;
  no: number;
  status: string;
  category: string;
  position:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position:1,id: 'ABC', name: 'ABC Company', no: 522, status: 'Active',category:'CU,NG,CP'},
  {position:2,id: 'A & H', name: 'A & H Hulling', no: 854, status: 'Active',category:'CU,NG,CP'},
  {position:3,id: 'DON', name: 'DONGWON Farms co.Ltd', no: 744, status: 'Active',category:'CU,NG,CP'},
  {position:4,id: 'DURAN', name: 'Duran Trucking', no: 101, status: 'Active',category:'CU,NG,CP'},
  {position:5,id: 'FHS', name: 'Frank Hanson & Son Inc.', no: 111, status: 'Active',category:'SH,NG,CG'},
  {position:6,id: 'ABC', name: 'ABC Company', no: 522, status: 'Active',category:'CU,NG,CP'},
  {position:7,id: 'A & H', name: 'A & H Hulling', no: 854, status: 'Active',category:'CU,NG,CP'},
  {position:8,id: 'DON', name: 'DONGWON Farms co.Ltd', no: 744, status: 'Active',category:'CU,NG,CP'},
  {position:9,id: 'DURAN', name: 'Duran Trucking', no: 101, status: 'Active',category:'CU,NG,CP'},
  {position:10,id: 'FHS', name: 'Frank Hanson & Son Inc.', no: 111, status: 'Active',category:'SH,NG,CG'}
];