import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  public url = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getReceitas(){
    return this.http.get(`${this.url}receitas`);
  }

  getReceitaById(id){
    return this.http.get(`${this.url}receitas?id=${id}`);
  }

  createReceita(data){
    return this.http.post(`${this.url}receitas`, data);
  }

  getMeusFilmes(){
    return this.http.get(`${this.url}filmes?situacao=1`);
  }
  getListaDesejos(){
    return this.http.get(`${this.url}filmes?situacao=2`);
  }

  createLivro(data){
    return this.http.post(`${this.url}filmes`, data);
  }
}
