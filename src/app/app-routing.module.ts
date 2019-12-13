import { GameModule } from './game/game.module';
import { ProductInfoComponent } from './product-info/product-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { CartComponent } from './cart/cart.component';
import { EditComponent } from './usuarios/edit/edit.component';


const routes: Routes = [
  { path: '', component: GameComponent},
  { path: 'cart', component: CartComponent},
  { path: 'game/:id', component: ProductInfoComponent},
  { path: 'usuarios', component: EditComponent},

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
