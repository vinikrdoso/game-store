import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  gameAdded: EventEmitter<any> = new EventEmitter();

  constructor() { }

  emitGameRead(carrinho) {
    this.gameAdded.emit(carrinho);
  }

  getGameEmitter() {
    return this.gameAdded;
  }
}
