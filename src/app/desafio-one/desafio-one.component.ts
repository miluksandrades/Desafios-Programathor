import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-desafio-one',
  templateUrl: './desafio-one.component.html',
  styleUrls: ['./desafio-one.component.css']
})
export class DesafioOneComponent implements OnInit {
  public dado: number;
  public lista = [];
  
  constructor() {
  }
  
  ngOnInit(): void {
  }
  
  createForm(){

    this.lista.push(this.dado);

    localStorage.setItem('pesos', JSON.stringify(this.lista))

    //console.log(this.lista)
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
    { data: this.lista, label: 'Lucas' }
  ];

}
