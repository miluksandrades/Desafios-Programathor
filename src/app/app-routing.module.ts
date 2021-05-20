import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DesafioOneComponent } from './desafio-one/desafio-one.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'desafio-one', component: DesafioOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
