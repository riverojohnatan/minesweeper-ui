import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MineSweeperHomeComponent} from './mine-sweeper-home/mine-sweeper-home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MineSweeperService} from './services/mine-sweeper.service';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { MineSweeperListComponent } from './mine-sweeper-list/mine-sweeper-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MineSweeperComponent } from './mine-sweeper/mine-sweeper.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MineSweeperCreateComponent } from './mine-sweeper-create/mine-sweeper-create.component';
import {DialogContentEndGameComponent} from './mine-sweeper/dialog/dialog-content-end-game.component';

@NgModule({
  declarations: [
    AppComponent,
    MineSweeperHomeComponent,
    MineSweeperListComponent,
    MineSweeperComponent,
    MineSweeperCreateComponent,
    DialogContentEndGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatTooltipModule,
    MatGridListModule
  ],
  providers: [MineSweeperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
