import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-desafio-two',
  templateUrl: './desafio-two.component.html',
  styleUrls: ['./desafio-two.component.css']
})
export class DesafioTwoComponent implements OnInit {

  public meusLivros: any;
  public listaDesejos: any;

  public livro = {
    autor: '',
    titulo: '',
    imagem: '',
    situacao: 0
  }

  constructor(private api: FilmesService) {
    this.api.getMeusFilmes().subscribe(res => {
      this.meusLivros = res
    })
    this.api.getListaDesejos().subscribe(res => {
      this.listaDesejos = res
    })
  }

  createLivro() {
    let livro = {
      autor: this.livro.autor,
      titulo: this.livro.titulo,
      imagem: this.livro.imagem,
      situacao: this.livro.situacao,
    }

    this.api.createLivro(livro).subscribe(res =>{
      console.log(res);
    })
  }

  ngOnInit(): void {
  }

}
