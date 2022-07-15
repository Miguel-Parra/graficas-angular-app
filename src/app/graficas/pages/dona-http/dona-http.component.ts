import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../service/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor(
    private _graficasService: GraficasService
  ) { }

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [], backgroundColor: ['#ED1842', '#2419D7', '#278485', '#E39E2D', '#A573F0' ] },
      // { data: [50, 150, 120] },
      // { data: [250, 130, 70] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {
    this._graficasService.getUsuarioRedesSocialesConFormato()
      .subscribe(datos => {
        this.doughnutChartData.labels = datos.labels;
        this.doughnutChartData.datasets[0].data = datos.data
      })
  }

}
