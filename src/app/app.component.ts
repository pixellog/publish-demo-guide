import {Component} from '@angular/core';
import {menus} from './menus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  menus = menus;
}
