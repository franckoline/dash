import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  smallChart() {
    return [{
      name: 'Adamawa',
      data: [100, 180, 350, 700, 900, 1119, 1226]
  }, {
      name: 'Gombe',
      data: [2, 10, 40, 133, 201, 201, 275]
  }, {
      name: 'Borno',
      data: [3, 20, 39, 100, 103, 119, 211]
  }, {
      name: 'Yobe',
      data: [1, 14, 55, 109, 111, 111, 121]
  }, {
    name: 'Bauchi',
    data: [0, 0, 0, 1, 3, 6, 10]
  },{
      name: 'Taraba',
      data: [3, 19, 60, 79, 89, 101, 110]
  }, {
      name: 'Others',
      data: [5, 20, 39, 45, 65, 92, 143]
 }];
  }
  pieChart(){
    return [{
          name: 'Adamawa',
          y: 1126,
          sliced: true,
          selected: true
      }, {
          name: 'Borno',
          y: 211
      }, {
          name: 'Taraba',
          y: 110
      }, {
          name: 'Gombe',
          y: 275
      }, {
          name: 'Yobe',
          y: 121
      }, {
          name: 'Bauchi',
          y: 10
      },  {
          name: 'Other',
          y: 143
      }]
  }
  cards(){
    return [71, 78, 39, 66];
  }
  cards2(){
    return [20, 30, 50, 80]
  }


  public exportAsExcelFile(json: any[], excelFileName: string): void {

    const myworksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const myworkbook: XLSX.WorkBook = { Sheets: { 'data': myworksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(myworkbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, `${fileName}_exported${EXCEL_EXTENSION}`);
  }
}
