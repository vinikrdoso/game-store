import { GameService } from './../game/game.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  url: number;
  game: { id: number; title: string; price: number; img: string; estoque: number; input: number; comprado: number; toArr: boolean; };

  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.params.subscribe((params: Params) => {
      this.url = params['id'];
    });
  }

  ngOnInit() {
    this.getGameInfo();
  }

  getGameInfo() {
    this.game = this.gameService.getGame(this.url);
  }

  plus(item) {
    item.input++;
  };
  minus(item) {
    item.input--;
  };
}
