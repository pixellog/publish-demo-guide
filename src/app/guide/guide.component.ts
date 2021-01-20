import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
})
export class GuideComponent implements OnInit {

  themes = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
  ];
  package = ['best', 'personal', 'corporate', 'common'];
  colors = [
    'blue',
    'indigo',
    'purple',
    'pink',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'cyan',
    'white',
    'gray',
    'gray-dark',
  ];
  size = ['sm', 'md', 'lg', 'xl'];

  constructor() { }

  ngOnInit(): void {
  }

}
