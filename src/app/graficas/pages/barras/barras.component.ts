import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent  {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
  };
  public barChartType: ChartType = 'bar';
 

  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#ED1842', hoverBackgroundColor: 'black' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#2419D7', hoverBackgroundColor: 'black' },
      { data: [12, 34, 67, 56, 86, 24, 47], label: 'Series C', backgroundColor: '#278485', hoverBackgroundColor: 'black' },
    ],
  };

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      
    ];
    this.barChartData.datasets[1].data = [
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      
    ];
    this.barChartData.datasets[2].data = [
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      
    ];

    this.chart?.update();

  }
}