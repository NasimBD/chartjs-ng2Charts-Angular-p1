import { Component, OnInit } from '@angular/core';
import {ChartType} from "chart.js";

@Component({
  selector: 'app-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
  styleUrls: ['./my-radar-chart.component.scss']
})
export class MyRadarChartComponent implements OnInit {

  radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  radarChartData = [
    {data: [120, 323,434,53], label: '2017'},
    {data: [412,523,353,190], label: '2018'}
  ];
  radarChartType: ChartType = 'radar';
  constructor() { }

  ngOnInit(): void {
  }
}
