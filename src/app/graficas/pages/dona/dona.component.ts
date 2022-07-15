import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100], backgroundColor: ['#ED1842', '#2419D7', '#278485' ] },
      // { data: [50, 150, 120] },
      // { data: [250, 130, 70] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {
  }

}
