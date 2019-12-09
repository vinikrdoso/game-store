import { HeaderService } from './../header/header.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';

@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
  ],
  providers: [
    HeaderService
  ]
})
export class GameModule {


 }
