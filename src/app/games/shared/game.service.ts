import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Game } from './game';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

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
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  delete(key: string) {
    this.db.object(`game/${key}`).remove();
  }
}