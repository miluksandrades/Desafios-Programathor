import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-desafio-four',
  templateUrl: './desafio-four.component.html',
  styleUrls: ['./desafio-four.component.css']
})
export class DesafioFourComponent implements OnInit {

  public contas:any = [];
  public pagas:any = [];
  public soma = 0;
  public somaDoDia = 0;

  constructor(private api: FilmesService) {
    this.api.getContasPagas().subscribe(res =>{
      this.pagas = res;
    })
    this.api.getContas().subscribe(res =>{
      this.contas = res;

      var date = new Date();
      var mes;

      if(date.getUTCMonth() < 10){
        mes = '0'+(date.getUTCMonth()+1);
      }
      var ref = `${date.getUTCFullYear()}-${mes}-${date.getUTCDate()}T00:00`;

      this.contas.forEach(element => {
        if(element.pago != 1){
          this.soma+=Number(element.valor);
        }
      });

      this.contas.forEach(element =>{
        if(element.pago != 1 && element.data == ref){
          this.somaDoDia+=Number(element.valor)
        }
      })
    })
  }

  ngOnInit(): void {
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barColors: Array<any> = [
    { // first color
      backgroundColor: '#1e3799',
      borderColor: '#1e3799',
      pointBackgroundColor: '#1e3799',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1e3799'
    }
  ]

  public barChartData: ChartDataSets[] = [
    { data: [10, 20 ,22, 43, 12, 51, 56], label: 'Lucas' }
  ];

}
