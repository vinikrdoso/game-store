import { element } from 'protractor';
import { GameService } from './../game/game.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  url: number;
  game: any = {};
  similarGames: any = [];

  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.url = params['id'];
    });
    router.events.subscribe((val) => {
      this.initPage();
    });

  }

  ngOnInit() {
    this.initPage();
  }

  initPage() {
    this.similarGames = [];
    this.getGameInfo();
    this.gameService.getSimilarGames(this.game);
  }

  plus(item) {
    item.input++;
  };
  minus(item) {
    item.input--;
  };

  getGameInfo() {
    this.game = this.gameService.getGame(this.url);
  }
}
