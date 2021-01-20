import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

import { Component, OnInit } from '@angular/core';
import {MENUS} from '../../menus';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
})
export class MobileComponent implements OnInit {
  menus = MENUS;

  constructor() { }

  ngOnInit(): void {
  }

}




