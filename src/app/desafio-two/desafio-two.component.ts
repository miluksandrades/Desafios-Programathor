import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafio-two',
  templateUrl: './desafio-two.component.html',
  styleUrls: ['./desafio-two.component.css']
})
export class DesafioTwoComponent implements OnInit {

  public lista = [
    { id: 1, autor: 'Lars Kepler', titulo: 'Stalker: Da série Joona Linna',
     imagem: 'https://m.media-amazon.com/images/I/41OpXkfazYL.jpg', situacao: 1 },
    { id: 1, autor: 'Lars Kepler', titulo: 'O homem de areia: Da série Joona Linna',
     imagem: 'https://images-na.ssl-images-amazon.com/images/I/41lGOj279cL._SX319_BO1,204,203,200_.jpg', situacao: 1 },
    { id: 1, autor: 'Lars Kepler', titulo: 'O caçador: Da série Joona Linna',
     imagem: 'https://m.media-amazon.com/images/P/B08HW7SBKZ.01._SCLZZZZZZZ_SX500_.jpg', situacao: 1 },
    { id: 1, autor: 'SØREN SVEISTRUP', titulo: 'As sombras de outubro',
     imagem: 'https://m.media-amazon.com/images/P/B07XTQ1ZFY.01._SCLZZZZZZZ_SX500_.jpg', situacao: 1 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
