import { Game } from './../shared/game';
import { Component, OnInit } from '@angular/core';
import { GameService } from '../shared/game.service';
import { Observable } from 'rxjs';
import { GameDataService } from '../shared/game-data.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: Observable<any>;

  constructor(private gameService: GameService, private gameDataService: GameDataService) { }

  ngOnInit() {
    this.games = this.gameService.getAll();
  }

  delete(key: string) {
    this.gameService.delete(key);
  }

  edit(game: Game, key: string) {
    this.gameDataService.changeGame(game, key);
  }
}