import { Component, OnInit } from '@angular/core';
import {MineSweeperService} from '../services/mine-sweeper.service';
import {MineSweeperRequest} from '../models/out/MineSweeperRequest';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-mine-sweeper-create',
  templateUrl: './mine-sweeper-create.component.html',
  styleUrls: ['./mine-sweeper-create.component.scss']
})
export class MineSweeperCreateComponent implements OnInit {

  request: MineSweeperRequest;

  constructor(private service: MineSweeperService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.queryParamMap.pipe(
      switchMap(query => of(decodeURIComponent(query.get('userId'))))
    ).subscribe(userId => {
      this.request = {
        userId,
        bombs: 0,
        rows: 0,
        columns: 0
      };
    });
  }

  createMineSweeper(): void {
    console.log('entre', this.request);
    this.service.postNewMineSweeper(this.request)
      .subscribe(data => this.router.navigate(['minesweeper', data.id]));
  }

}
