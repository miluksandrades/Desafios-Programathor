import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient) { }

  getMeusFilmes(){
    return this.http.get('http://localhost:3000/filmes?situacao=1')
  }
  getListaDesejos(){
    return this.http.get('http://localhost:3000/filmes?situacao=2')
  }

  createLivro(data){
    return this.http.post('http://localhost:3000/filmes', data)
  }
}
