import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-desafio-three',
  templateUrl: './desafio-three.component.html',
  styleUrls: ['./desafio-three.component.css']
})
export class DesafioThreeComponent implements OnInit {

  public receitas: any;

  constructor(private api: FilmesService) {
    this.api.getReceitas().subscribe(res =>{
      this.receitas = res;
    })
  }

  ngOnInit(): void {
  }

}
