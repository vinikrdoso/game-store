import { HeaderService } from './../header/header.service';
import { Component, OnInit } from '@angular/core';
import { GameService } from '../games/shared/game.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

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