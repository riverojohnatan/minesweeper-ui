import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MineSweeper} from '../models/in/MineSweeper';
import {MineSweeperRequest} from '../models/out/MineSweeperRequest';
import {CellRequest} from '../models/out/CellRequest';

const baseURL = 'http://minesweeperapi-env.eba-gg3eu3jh.us-east-1.elasticbeanstalk.com/minesweeper';

@Injectable({
  providedIn: 'root'
})
export class MineSweeperService {

  constructor(private httpClient: HttpClient) { }

  public getMineSweeperListsByUserId(username: string): Observable<MineSweeper[]> {
    console.log('Retrieve mineSweeper list by username: ', username);
    return this.httpClient.get<MineSweeper[]>(`${baseURL}/${username}`);
  }

  public getMineSweeperById(mineSweeperId: string): Observable<MineSweeper> {
    console.log('Retrieve mineSweeper by id: ', mineSweeperId);
    return this.httpClient.get<MineSweeper>(`${baseURL}/load/${mineSweeperId}`);
  }

  public postNewMineSweeper(request: MineSweeperRequest): Observable<MineSweeper> {
    console.log('Create a new mineSweeper');
    console.log(JSON.stringify(request));
    return this.httpClient.post<MineSweeper>(`${baseURL}/create`, request);
  }

  public saveMineSweeper(request: MineSweeper): Observable<MineSweeper> {
    console.log('Save mineSweeper');
    console.log(JSON.stringify(request));
    return this.httpClient.put<MineSweeper>(baseURL, request);
  }

  public pauseMineSweeper(request: MineSweeper): Observable<MineSweeper> {
    console.log('Pause mineSweeper', request.id);
    console.log(JSON.stringify(request));
    return this.httpClient.put<MineSweeper>(`${baseURL}/pause/${request.id}`, request);
  }

  public cellAction(request: CellRequest, action: string): Observable<MineSweeper> {
    console.log('Cell action: ', action);
    console.log(JSON.stringify(request));
    return this.httpClient.put<MineSweeper>(`${baseURL}/cell/${action}`, request);
  }

}
