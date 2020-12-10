import {Component, OnDestroy, OnInit} from '@angular/core';
import {MineSweeperService} from '../services/mine-sweeper.service';
import {MineSweeper} from '../models/in/MineSweeper';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {CellRequest} from '../models/out/CellRequest';

@Component({
  selector: 'app-minesweeper',
  templateUrl: './mine-sweeper.component.html',
  styleUrls: ['./mine-sweeper.component.scss']
})
export class MineSweeperComponent implements OnInit, OnDestroy {

  mineSweeper: MineSweeper;

  constructor(private service: MineSweeperService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => of(decodeURIComponent(params.get('id'))))
    ).subscribe(id => {
      this.service.getMineSweeperById(id).subscribe(data => {
        this.mineSweeper = this.sortCells(data);
      });
    });
  }

  clickCell(x: number, y: number): void {
    const cellRequest: CellRequest = {
      mineSweeperId: this.mineSweeper.id,
      x,
      y
    };
    this.service.cellAction(cellRequest, 'click')
      .subscribe(data => this.mineSweeper = this.sortCells(data));
  }

  flagCell(x: number, y: number): void {
    const cellRequest: CellRequest = {
      mineSweeperId: this.mineSweeper.id,
      x,
      y
    };
    this.service.cellAction(cellRequest, 'flag')
      .subscribe(data => this.mineSweeper = this.sortCells(data));
  }

  private sortCells(data: MineSweeper): MineSweeper {
    const cells = [];
    for (let i = 0; i < data.rows; i++) {
      data.cells.filter(cell => cell.y === i)
        .sort((first, second) => (first.x > second.x) ? 1 : -1)
        .forEach(value => cells.push(value));
    }

    data.cells = cells;
    return data;
  }

  ngOnDestroy(): void {
    this.mineSweeper = undefined;
  }

}
