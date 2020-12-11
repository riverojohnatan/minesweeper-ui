import {Component, OnDestroy, OnInit} from '@angular/core';
import {MineSweeperService} from '../services/mine-sweeper.service';
import {MineSweeper} from '../models/in/MineSweeper';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {CellRequest} from '../models/out/CellRequest';
import {DialogContentEndGameComponent} from './dialog/dialog-content-end-game.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-minesweeper',
  templateUrl: './mine-sweeper.component.html',
  styleUrls: ['./mine-sweeper.component.scss']
})
export class MineSweeperComponent implements OnInit, OnDestroy {

  mineSweeper: MineSweeper;
  action = 'click';

  constructor(private service: MineSweeperService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => of(decodeURIComponent(params.get('id'))))
    ).subscribe(id => {
      this.service.getMineSweeperById(id).subscribe(data => {
        this.mineSweeper = this.sortCells(data);
      });
    });
  }

  actionCell(x: number, y: number): void {
    const cellRequest: CellRequest = {
      mineSweeperId: this.mineSweeper.id,
      x,
      y
    };
    this.service.cellAction(cellRequest, this.action)
      .subscribe(data => {
        this.mineSweeper = this.sortCells(data);
        switch (this.mineSweeper.status) {
          case 'WIN':
            this.openDialog('You are the winner!!!');
            break;
          case 'GAME_OVER':
            this.openDialog('You lose');
            break;
        }
      });
  }

  pause(): void {
    this.service.pauseMineSweeper(this.mineSweeper)
      .subscribe(data => this.router.navigate([''], { queryParams: {userId: this.mineSweeper.userId}}));
  }

  private openDialog(message: string): void {
    const dialogRef = this.dialog.open(DialogContentEndGameComponent, {
      data: {
        message,
        userId: this.mineSweeper.userId
      }
    });
  }

  private sortCells(data: MineSweeper): MineSweeper {
    const cells = [];
    for (let i = 0; i < data.rows; i++) {
      data.cells.filter(cell => cell.x === i)
        .sort((first, second) => (first.y > second.y) ? 1 : -1)
        .forEach(value => cells.push(value));
      console.log(i, cells);
    }

    data.cells = cells;
    return data;
  }

  ngOnDestroy(): void {
    this.mineSweeper = undefined;
  }

}
