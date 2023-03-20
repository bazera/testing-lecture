import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bla } from './bla';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  number: number = 0;

  constructor() {}

  increase() {
    this.number = this.number + 1;
  }

  decrease() {
    this.number--;
  }
}
