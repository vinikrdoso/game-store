import { HeaderService } from './../header/header.service';
import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games = [
    {
      id: 1,
      title: 'God of War',
      price: 50,
      img: "./assets/images/God-of-War.jpg",
      estoque: 2,
      input: 0,
      comprado: 0,
      toArr: false,
    },
    {
      id: 2,
      title: 'Death Stranding',
      price: 70,
      img: "./assets/images/Death-Stranding.jpg",
      estoque: 1,
      input: 0,
      comprado: 0,
      toArr: false
    },
    {
      id: 3,
      title: 'The Last Of Us 2',
      price: 40,
      img: "./assets/images/The-Last-Of-Us-2.jpg",
      estoque: 2,
      input: 0,
      comprado: 0,
      toArr: false
    },
    {
      id: 4,
      title: 'The Last Guardian',
      price: 60,
      img: "./assets/images/The-Last-Guardian.jpg",
      estoque: 5,
      input: 0,
      comprado: 0,
      toArr: false
    },
    {
      id: 5,
      title: 'Crash Bandicoot',
      price: 30,
      img: "./assets/images/Crash.jpg",
      estoque: 3,
      input: 0,
      comprado: 0,
      toArr: false
    }
  ];
  total: number = 0;
  quantidade: number = 0;
  comprado: any;
  subscription: any;
  carrinho: any;

  constructor(
    private headerService: HeaderService,
    private gameService: GameService,
    ) { }

  ngOnInit() {
  }

  plus(item) {
    item.input++;
  };
  minus(item) {
    item.input--;
  };
}