import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  subscription: any;

  @Output() myEvent = new EventEmitter();

  quantidade: number = 0
  total: number = 0

  newCarrinho: any = []



  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.subscription = this.headerService.getGameEmitter().subscribe(game => {
      if (game.toArr == true) {
        debugger;
        this.newCarrinho.push(game);
        this.quantidade += game.input;
        this.total += game.price * game.input;
      }
      console.log(this.newCarrinho)
    })
  }

  zerarCarrinho() {
    debugger;
    this.quantidade = 0;
    this.total = 0;
    this.newCarrinho.forEach(element => {
      element.estoque += element.comprado;
      element.comprado = 0;
    });
    this.newCarrinho = [];
  }

  atualizaCarrinho(){
    
  }

}
