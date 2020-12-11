import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'dialog-content-end-game',
  templateUrl: 'dialog-content-end-game.html',
})
export class DialogContentEndGameComponent {

  userId: string;
  message: string;

  constructor(private router: Router,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.userId = data.userId;
    this.message = data.message;
  }

  goToList(): void {
    this.router.navigate([''], { queryParams: {userId: this.userId}});
  }

  goToNewGame(): void {
    this.router.navigate(['minesweeper/new'], { queryParams: {userId: this.userId}});
  }
}
