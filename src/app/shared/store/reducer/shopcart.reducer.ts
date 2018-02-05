import {ActionReducer} from '@ngrx/store';
import {ShopCart} from '../shop_cart.class';
import {CartProduct} from '../model/cart_product.model';
import {Action} from '../model/action.model';

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INIT_CART = 'INIT_CART';

export const ShopCartReducer: ActionReducer<ShopCart> = (state: ShopCart = new ShopCart(), action: Action) => {
  switch (action.type) {
    case ADD:
      return pushToCart(state, action.payload);

    case INCREMENT:
      return pullFromCart(state, action.payload);

    case DECREMENT:
      state.sum = 0;
      return state;

    default:
      return state;
  }
};

export function pushToCart(shopcart: ShopCart, payload: CartProduct) {
  shopcart.sum += payload.price;
  shopcart.items.push(payload);
  console.log(shopcart);
  return shopcart;
}

export function pullFromCart(shopcart: ShopCart, payload: CartProduct) {
  shopcart.sum -= payload.price;
  return shopcart;
}
