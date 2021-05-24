import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DesafioOneComponent } from './desafio-one/desafio-one.component';
import { DesafioTwoComponent } from './desafio-two/desafio-two.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'desafio-one', component: DesafioOneComponent},
  {path: 'desafio-two', component: DesafioTwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
