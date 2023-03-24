import { Component } from '@angular/core';
import { DiscountService } from './discount.service';

export interface User {
  firstName: string;
  lastName: string;
  age: number;
}

export interface ShopItem {
  name: string;
  price: number;
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

  shopItems: ShopItem[] = [
    {
      name: 'Pants',
      price: 100,
    },
    {
      name: 'T-Shirt',
      price: 80,
    },
    {
      name: 'Shoes',
      price: 230,
    },
  ];

  lastBoughtItem: {
    item: ShopItem | undefined;
    finalPrice: number;
  } = {
    item: undefined,
    finalPrice: 0,
  };

  constructor(private discountService: DiscountService) {}

  increase() {
    this.number = this.number + 1;
  }

  decrease() {
    this.number--;
  }

  purchase(item: ShopItem) {
    const finalPrice = this.discountService.purchase(item);
    this.lastBoughtItem = {
      item,
      finalPrice,
    };
  }

  ngOnInit() {
    this.discountService.setDiscountPercent(10);
  }
}
