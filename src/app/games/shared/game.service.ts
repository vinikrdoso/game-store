import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Game } from './game';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  similarGames: any = [];
  games: any = [];

  constructor(private db: AngularFireDatabase) { }

  insert(game: Game) {
    this.db.list('game').push(game)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(game: Game, key: string) {
    this.db.list('game').update(key, game)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    return this.db.list('game')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...(c.payload.val()) as {} }));
        })
      );
  }

  delete(key: string) {
    this.db.object(`game/${key}`).remove();
  }

  getGame(codigo) {
    return this.games.find(element => element.id == codigo);
  }

  getAllGames() {
    return this.games;
  }

  getSimilarGames(game) {
    this.similarGames = [];
    this.games.forEach(element => {
      if (element.genero == game.genero && element.title != game.title)
        this.similarGames.push(element)
    })
    console.log(this.similarGames)
    return this.similarGames;
  }
}