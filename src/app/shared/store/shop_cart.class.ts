import {CartProduct} from './model/cart_product.model';

export class ShopCart {
  items: CartProduct[];
  sum: number;
  isCartVisible: boolean;

  constructor() {
    this.items = [];
    this.sum = 0;
    this.isCartVisible = false;
  }
}
