import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  
  similarGames: any = [];
  games: any = [];

  constructor(private headerService: HeaderService) { }

  getGame(codigo) {
    return this.games.find(element => element.id == codigo);
  }

  getAllGames() {
    return this.games;
  }

  addCart(game) {
    if (game.input == 0) {
      alert("Não há produtos selecionados.");
    } else if (game.input > game.estoque) {
      alert(`A quantidade que você selecionou é maior que o estoque disponível. Quantidade disponível: ${game.estoque}`);
    } else {
      alert("Game adicionado ao carrinho!");
      game.estoque -= game.input;
      game.comprado += game.input;
      game.toArr = true;
      this.headerService.emitGameRead(game);
      game.toArr = false;
    }
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
