import { TestBed } from '@angular/core/testing';
import { ShopItem } from './app.component';

import { DiscountService } from './discount.service';

const shopItems: ShopItem[] = [
  {
    name: 'Pants',
    price: 678,
  },
  {
    name: 'T-Shirt',
    price: 123,
  },
  {
    name: 'Shoes',
    price: 765,
  },
];

describe('DiscountService', () => {
  let service: DiscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return final discounted price when we purchase an item', () => {
    const perc = 65;
    service.setDiscountPercent(perc);
    const price = service.purchase(shopItems[2]);
    expect(price).toBe(shopItems[2].price - (shopItems[2].price * perc) / 100);
  });
});
