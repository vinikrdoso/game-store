import { GameModule } from './../game/game.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from '../game/game.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GameModule,
    GameComponent
  ]
})
export class HeaderModule { }
