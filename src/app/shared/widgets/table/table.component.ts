import { Component, OnInit } from '@angular/core';


export interface Applicants {
  SerialNo: number;
  fName: string;
  lName: string;
  education: string;
  sex: string;
  tel: string;
  email: string;
  location: string;
  origin: string;
}

const ELEMENT_DATA: Applicants[] = [
  {SerialNo: 1, fName: 'Hydrogen', lName: 'Peter', sex: 'F', education:'Secondary', tel: '+234813245458', email:'franckoline@yahoo.com', location:'Adamawa', origin:'Adamawa'},
  {SerialNo: 2, fName: 'Michael', lName: 'Peter', sex: 'F', education:'Tertiary', tel: '+234813245458', email:'franckoline@yahoo.com', location:'Yola', origin:'Gombe'},
  {SerialNo: 3, fName: 'Hydrogen', lName: 'Peter', sex: 'F', education:'Tertiary', tel: '+234813245458', email:'franckoline@yahoo.com', location:'Bauchi', origin:'Taraba'},
  {SerialNo: 4, fName: 'Hydrogen', lName: 'Peter', sex: 'F', education:'Tertiary', tel: '+234813245458', email:'franckoline@yahoo.com', location:'Yola', origin:'Adamawa'},
];

@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
