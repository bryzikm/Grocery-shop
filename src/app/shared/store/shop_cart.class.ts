import {CartProduct} from './model/cart_product.model';

export class ShopCart {
  items: CartProduct[];
  sum: number;

  constructor() {
    this.items = [];
    this.sum = 0;
  }
}
