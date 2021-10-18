import { Component, OnInit } from '@angular/core';
import {ChartType} from "chart.js";

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.scss']
})
export class MyPieChartComponent implements OnInit {

  pieChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  pieChartData = [43,21,2,11];
  pieChartType: ChartType = 'pie';

  constructor() { }

  ngOnInit(): void {
  }
}
