import {Component, OnDestroy, OnInit} from '@angular/core';
import {MineSweeperService} from '../services/mine-sweeper.service';
import {MineSweeper} from '../models/in/MineSweeper';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-minesweeper-home',
  templateUrl: './mine-sweeper-home.component.html',
  styleUrls: ['./mine-sweeper-home.component.scss']
})
export class MineSweeperHomeComponent implements OnInit, OnDestroy {

  userId: string;
  mineSweepers: MineSweeper[] = [];

  renderList = false;

  constructor(private service: MineSweeperService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnDestroy(): void {
        this.userId = undefined;
        this.renderList = false;
        this.mineSweepers = [];
    }

  ngOnInit(): void {
    this.route.queryParamMap.pipe(
      switchMap(query => of(decodeURIComponent(query.get('userId'))))
    ).subscribe(userId => {
      if (userId !== 'null') {
        this.userId = userId;
        this.service.getMineSweeperListsByUserId(userId).subscribe(data => {
          this.renderList = true;
          this.mineSweepers = data;
        });
      }
    });
  }

  login(): void {
    this.mineSweepers = [];
    this.service.getMineSweeperListsByUserId(this.userId).subscribe(data => {
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

}
