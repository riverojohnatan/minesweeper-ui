import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MineSweeperHomeComponent} from './mine-sweeper-home/mine-sweeper-home.component';
import {MineSweeperComponent} from './mine-sweeper/mine-sweeper.component';

const routes: Routes = [
  {path: '', component: MineSweeperHomeComponent},
  {path: 'minesweeper/:id', component: MineSweeperComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
