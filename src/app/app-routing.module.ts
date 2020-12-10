import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MineSweeperHomeComponent} from './mine-sweeper-home/mine-sweeper-home.component';
import {MineSweeperComponent} from './mine-sweeper/mine-sweeper.component';
import {MineSweeperCreateComponent} from './mine-sweeper-create/mine-sweeper-create.component';

const routes: Routes = [
  {path: '', component: MineSweeperHomeComponent},
  {path: 'minesweeper/new', component: MineSweeperCreateComponent},
  {path: 'minesweeper/:id', component: MineSweeperComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
