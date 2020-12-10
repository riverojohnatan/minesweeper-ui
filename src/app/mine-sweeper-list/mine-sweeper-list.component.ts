import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MineSweeper} from '../models/in/MineSweeper';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-minesweeper-list',
  templateUrl: './mine-sweeper-list.component.html',
  styleUrls: ['./mine-sweeper-list.component.css']
})
export class MineSweeperListComponent implements OnInit {

  @Input()
  data: MineSweeper[];

  @Output()
  resumeGameEvent: EventEmitter<MineSweeper> = new EventEmitter<MineSweeper>();

  dataSource: MatTableDataSource<MineSweeper>;
  displayedColumns: string[] = ['id', 'columns', 'rows', 'bombs', 'status', 'action'];


  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  resumeGame(element: MineSweeper): void {
    this.resumeGameEvent.emit(element);
  }

}
