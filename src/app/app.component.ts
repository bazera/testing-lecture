import { Component } from '@angular/core';

export interface User {
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  number: number = 0;

  users: User[] = [
    {
      firstName: 'Giorgi',
      lastName: 'Bazerashvili',
      age: 6,
    },
    {
      firstName: 'Kote',
      lastName: 'Kirkitadze',
      age: 18,
    },
    {
      firstName: 'Beso',
      lastName: 'Gagelidze',
      age: 9,
    },
    {
      firstName: 'Giorgi',
      lastName: 'Beruashvili',
      age: 20,
    },
    {
      firstName: 'Bla',
      lastName: 'Blashvili',
      age: 23,
    },
  ];

  constructor() {}

  increase() {
    this.number = this.number + 1;
  }

  decrease() {
    this.number--;
  }
}
