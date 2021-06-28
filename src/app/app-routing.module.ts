import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DesafioFourComponent } from './desafio-four/desafio-four.component';
import { DesafioOneComponent } from './desafio-one/desafio-one.component';
import { DesafioThreeComponent } from './desafio-three/desafio-three.component';
import { ReceitaViewComponent } from './desafio-three/receita-view/receita-view.component';
import { DesafioTwoComponent } from './desafio-two/desafio-two.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'desafio-one', component: DesafioOneComponent},
  {path: 'desafio-two', component: DesafioTwoComponent},
  {path: 'desafio-three', component: DesafioThreeComponent},
  {path: 'desafio-three/:id', component: ReceitaViewComponent},
  {path: 'desafio-four', component: DesafioFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
