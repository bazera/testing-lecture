import { Injectable } from '@angular/core';
import { ShopItem } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class DiscountService {
  private _discountPercent = 0;

  constructor() {}

  purchase(item: ShopItem) {
    return item.price - (item.price * this._discountPercent) / 100;
  }

  setDiscountPercent(percent: number) {
    this._discountPercent = percent;
  }
}
