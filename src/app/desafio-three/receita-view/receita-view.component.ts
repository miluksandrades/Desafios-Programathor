import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-receita-view',
  templateUrl: './receita-view.component.html',
  styleUrls: ['./receita-view.component.css']
})
export class ReceitaViewComponent implements OnInit {

  public receita: any;

  constructor(private api: FilmesService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) =>{
      const id = Number.parseInt(params['id']);

      this.api.getReceitaById(id).subscribe(res =>{
        this.receita = res;
      })
    })
  }

  ngOnInit(): void {
  }

}
