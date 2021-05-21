import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafio-one',
  templateUrl: './desafio-one.component.html',
  styleUrls: ['./desafio-one.component.css']
})
export class DesafioOneComponent implements OnInit {

  public pesosForm;
  
  public salvarPeso(){
    var dados = [];

    dados.push(this.pesosForm)

    console.log(dados)

    localStorage.setItem('pesos', JSON.stringify(dados));
  }
  constructor() {
  }
  
  ngOnInit(): void {
  }
  

}
