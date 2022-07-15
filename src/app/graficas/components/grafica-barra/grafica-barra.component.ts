import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent  implements OnInit {

  @Input('horizontal') horizontal: boolean = false;

  @Input() barChartData: ChartData= {
    labels: [  ],
    datasets: [    ],
  };

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
  };
  
  public barChartType: ChartType = 'bar'; 

  ngOnInit(): void {
   if (this.horizontal) {
    this.barChartOptions!.indexAxis = 'y';
   }
  }
   // this.chart?.update();
}
