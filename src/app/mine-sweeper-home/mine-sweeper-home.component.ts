import {Component, OnInit} from '@angular/core';
import {MineSweeperService} from '../services/mine-sweeper.service';
import {MineSweeper} from '../models/in/MineSweeper';
import {Router} from '@angular/router';

@Component({
  selector: 'app-minesweeper-home',
  templateUrl: './mine-sweeper-home.component.html',
  styleUrls: ['./mine-sweeper-home.component.scss']
})
export class MineSweeperHomeComponent implements OnInit {

  userId: string;
  mineSweepers: MineSweeper[] = [];

  renderList = false;

  constructor(private service: MineSweeperService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.mineSweepers = [];
    this.service.getMineSweeperListsByUsername(this.userId).subscribe(data => {
      console.log(data);
      this.mineSweepers = data;
      this.renderList = true;
    });

  }

  resumeGame(mineSweeper: MineSweeper): void {
    this.service.pauseMineSweeper(mineSweeper).subscribe(data => {
      console.log(data.status);
      this.router.navigate(['minesweeper', mineSweeper.id]);
    });
  }

  clean(): void {
    this.userId = null;
  }

}
