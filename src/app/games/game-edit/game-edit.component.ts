import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../shared/game';
import { GameService } from '../shared/game.service';
import { GameDataService } from '../shared/game-data.service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit {
  game: Game;
  key: string = '';

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  task: AngularFireUploadTask;
  complete: boolean;
  caminhoImagem: string;

  constructor(private gameService: GameService, private gameDataService: GameDataService, private storage: AngularFireStorage) { }

  ngOnInit() {
    this.game = new Game();
    this.gameDataService.currentGame.subscribe(data => {
      if (data.game && data.key) {
        this.game = new Game();
        this.game.id = data.game.id;
        this.game.title = data.game.title;
        this.game.price = data.game.price;
        this.game.img = data.game.img;
        this.game.estoque = data.game.estoque;
        this.game.input = data.game.input;
        this.game.comprado = data.game.comprado;
        this.game.toArr = data.game.toArr;
        this.key = data.key;
      }
    })
  }

  onSubmit() {
    if (this.key) {
      this.gameService.update(this.game, this.key);
    } else {
      this.gameService.insert(this.game);
    }

    this.game = new Game();
  }

  upload(event) {
    this.complete = false;
    const file = event.target.files[0]
    const path = `imagens/${file.name}`;
    const fileRef = this.storage.ref(path.replace(/\s/g, ''));
    this.task = this.storage.upload(path.replace(/\s/g, ''), file)
    this.task.then(up => {
      fileRef.getDownloadURL().subscribe(url => {
        this.complete = true
        debugger;
        this.game.img = url;
        this.caminhoImagem = url

      })
    })
    this.uploadPercent = this.task.percentageChanges();
    console.log(this.caminhoImagem)
  }
}