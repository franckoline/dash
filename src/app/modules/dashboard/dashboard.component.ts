
import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

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
  {SerialNo: 1, fName: 'Davies', lName: 'Esther', sex: 'F', education:'Tertiary', tel: '+2347034267525', email:'daviesesther74@gmail.com', location:'Yola', origin:'Rivers'},
  {SerialNo: 2, fName: 'Ede', lName: 'Chiagozien', sex: 'F', education:'Tertiary', tel: '+23480920461115', email:'elotachukwu@gmail.com', location:'Yola', origin:'Enugu'},
  {SerialNo: 3, fName: 'Ezerioha', lName: 'Favour', sex: 'F', education:'Tertiary', tel: '+2348065582639', email:'favourmje@gmail.com', location:'Yola', origin:'Imo'},
  {SerialNo: 4, fName: 'Famah', lName: 'Faith-Kwandi', sex: 'F', education:'Secondary', tel: '+2349071014296', email:'kwandifaithfamah@gmail.com', location:'Yola', origin:'Adamawa'},
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  smallChart = [];
  cards = [];
  cards2 = [];
  pieChart = [];
  applicant = [];

  displayedColumns: string[] = ['SerialNo', 'fName', 'lName', 'sex', 'education', 'tel', 'email', 'origin', 'location'];
  dataSource = new MatTableDataSource<Applicants>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }


  ngOnInit() {
    this.smallChart = this.dashboardService.smallChart();
    this.cards = this.dashboardService.cards();
    this.cards2 = this.dashboardService.cards2();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

  exportAsXLSX():void {
    this.dashboardService.exportAsExcelFile(ELEMENT_DATA, 'MentorsInt_WebDev_');
  }

}
