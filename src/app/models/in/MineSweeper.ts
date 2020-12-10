import {Cell} from './Cell';

export class MineSweeper {
  bombs: number;
  cells: Cell[];
  columns: number;
  creationTime: Date;
  id: string;
  lastUpdate: Date;
  rows: number;
  status: string;
  timePaused: number;
  userId: string;
}
