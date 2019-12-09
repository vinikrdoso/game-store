import { GameComponent } from './../game/game.component';
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

  carrinho: any = {
    quantidade: 0,
    total: 0
  }
  total: any;
  quantidade: any;
  taken: any;

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.subscription = this.headerService.getGameEmitter().subscribe(carrinho => {
      this.carrinho.quantidade = carrinho.quantidade
      this.carrinho.total = carrinho.total
    })
  }

  zerarCarrinho(carrinho) {
    console.log(carrinho)
    this.myEvent.emit(null)
  }
}
