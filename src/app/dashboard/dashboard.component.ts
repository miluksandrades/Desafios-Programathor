import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public desafios = [
    {route: '/desafio-one', task: 'Desafio 1', description: 'Um aplicativo que registra peso', url: 'assets/desafio_1.png'},
    {route: '/desafio-two', task: 'Desafio 2', description: 'Um banco de dados de livros', url: 'assets/desafio_2.png'},
    {route: '/desafio-three', task: 'Desafio 3', description: 'Um aplicativo de receitas', url: 'assets/desafio_3.png'},
    {route: '/desafio-four', task: 'Desafio 4', description: 'Um registrador de contas', url: ''},
    {route: '/desafio-five', task: 'Desafio 5', description: 'Um registrador de despesas', url: ''},
    {route: '/desafio-six', task: 'Desafio 6', description: 'Um aplicativo de chat', url: ''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
