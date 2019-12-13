import { Component } from '@angular/core';

import { PoMenuItem } from '@portinari/portinari-ui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];

  constructor(private router: Router){
    router.events.subscribe((val) => {
      window.scroll(0,0);
    });
  }

  private onClick() {
    alert('Clicked in menu item')
  }

}
