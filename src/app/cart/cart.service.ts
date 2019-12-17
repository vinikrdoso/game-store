import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  /*addCart(game) {
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
  }*/
}
