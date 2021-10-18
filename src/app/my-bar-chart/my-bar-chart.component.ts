import { Component, OnInit } from '@angular/core';
import {ChartType} from "chart.js";

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.scss']
})
export class MyBarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType : ChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [145,242,534,23,756,757,45], label: 'Series A'},
    {data: [45,262,65,43,787,234,987], label: 'Series B'},
  ]

  constructor() { }

  ngOnInit(): void { }
}
