import { HeaderService } from './../header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games = [
    {
      title: 'God of War',
      price: 50,
      img: "./assets/images/God-of-War.jpg",
      estoque: 2,
      input: 0,
      taken: 0
    },
    {
      title: 'Death Stranding',
      price: 70,
      img: "./assets/images/Death-Stranding.jpg",
      estoque: 1,
      input: 0,
      taken: 0
    },
    {
      title: 'The Last Of Us 2',
      price: 40,
      img: "./assets/images/The-Last-Of-Us-2.jpg",
      estoque: 2,
      input: 0,
      taken: 0
    },
    {
      title: 'The Last Guardian',
      price: 60,
      img: "./assets/images/The-Last-Guardian.jpg",
      estoque: 5,
      input: 0,
      taken: 0
    },
    {
      title: 'Crash Bandicoot',
      price: 30,
      img: "./assets/images/Crash.jpg",
      estoque: 3,
      input: 0,
      taken: 0
    }
  ];
  total: number = 0;
  quantidade: number = 0 ;
  taken: any;

  constructor(private headerService: HeaderService) { }

  ngOnInit() { }

  addCart(game) {
    if (game.input == 0) {
      alert("Não há produtos selecionados.");
    } else if (game.input > game.estoque) {
      alert(`A quantidade que você selecionou é maior que o estoque disponível. Quantidade disponível: ${game.estoque}`);
    } else {
      alert("Game adicionado ao carrinho!");
      this.total += game.price * game.input;
      this.quantidade += game.input;
      game.estoque -= game.input;
      game.taken += game.input;
    }
    this.headerService.emitGamefRead({total: this.total, quantidade: this.quantidade});
  }
  
  zerarCarrinhoGame() {
    console.log(this.total);
  }
}