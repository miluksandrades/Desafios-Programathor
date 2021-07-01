import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesafioOneComponent } from './desafio-one/desafio-one.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { DesafioTwoComponent } from './desafio-two/desafio-two.component';
import { HttpClientModule } from '@angular/common/http';;
import { FilmesService } from './services/filmes.service';
import { DesafioThreeComponent } from './desafio-three/desafio-three.component';
import { ReceitaViewComponent } from './desafio-three/receita-view/receita-view.component';
import { DesafioFourComponent } from './desafio-four/desafio-four.component';
import { ContasPagasListComponent } from './desafio-four/contas-pagas-list/contas-pagas-list.component';
import { ContasListComponent } from './desafio-four/contas-list/contas-list.component'

@NgModule({
  declarations: [
    AppComponent,
    DesafioOneComponent,
    DashboardComponent,
    DesafioTwoComponent,
    DesafioThreeComponent,
    ReceitaViewComponent,
    DesafioFourComponent,
    ContasPagasListComponent,
    ContasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [
    FilmesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
