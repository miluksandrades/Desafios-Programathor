import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-desafio-three',
  templateUrl: './desafio-three.component.html',
  styleUrls: ['./desafio-three.component.css']
})
export class DesafioThreeComponent implements OnInit {

  public receitas: any;

  public receita = {
    titulo: '',
    tempo: 0,
    porcoes: 0,
    image: ''
  }

  public ingrediente: any;
  public ingredientes = [];
  public preparo: any;
  public preparos = [];

  addIngrediente() {
    this.ingredientes.push(this.ingrediente)
  }

  addPreparo() {
    this.preparos.push(this.preparo)
  }

  constructor(private api: FilmesService) {
    this.api.getReceitas().subscribe(res => {
      this.receitas = res;
    })
  }

  addReceita() {
    let receita = {
      titulo: this.receita.titulo,
      tempo: this.receita.tempo,
      porcoes: this.receita.porcoes,
      image: this.receita.image,
      ingredientes: this.ingredientes,
      preparo: this.preparos
    }

    this.api.createReceita(receita).subscribe(res => {
      console.log(res);
    })
  }

  ngOnInit(): void {
  }

}
