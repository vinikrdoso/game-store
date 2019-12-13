import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  private gameSource = new BehaviorSubject({ game: null, key: '' });
  currentGame = this.gameSource.asObservable();

  constructor() { }

  changeGame(game: Game, key: string) {
    this.gameSource.next({ game: game, key: key });
  }
}