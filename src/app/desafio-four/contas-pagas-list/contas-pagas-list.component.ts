import { Component, OnInit } from '@angular/core';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-contas-pagas-list',
  templateUrl: './contas-pagas-list.component.html',
  styleUrls: ['./contas-pagas-list.component.css']
})
export class ContasPagasListComponent implements OnInit {

  public pagas:any = [];

  constructor(private api: FilmesService) {
    this.api.getContasPagas().subscribe(res =>{
      this.pagas = res;
    })
  }

  ngOnInit(): void {
  }

}
