import {ActionReducer} from '@ngrx/store';
import {ShopCart} from '../shop_cart.class';
import {CartProduct} from '../model/cart_product.model';
import {Action} from '../model/action.model';

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INIT_CART = 'INIT_CART';
export const SHOW_CART = 'SHOW_CART';
export const HIDE_CART = 'HIDE_CART';

export const ShopCartReducer: ActionReducer<ShopCart> = (state: ShopCart = new ShopCart(), action: Action) => {
    switch (action.type) {
        case ADD:
            return addToCart(state, action.payload);

        case REMOVE:
            return removeFromCart(state, action.payload);

        case INCREMENT:
            return incrementProductNumber(state, action.payload);

        case DECREMENT:
            return decrementProductNumber(state, action.payload);

        case INIT_CART:
            return initShopCart(state, action.payload);

        case SHOW_CART:
            state.isCartVisible = true;
            return state;

        case HIDE_CART:
            state.isCartVisible = false;
            return state;

        default:
            return state;
    }
};

export function addToCart(shopCart: ShopCart, payload: CartProduct) {
    shopCart.isCartVisible = true;

    if (!checkIfProductIsInCart(payload, shopCart.items)) {
        shopCart.sum += payload.price;
        shopCart.items.push(Object.assign({count: 1}, payload));
    }

    return shopCart;
}

export function removeFromCart(shopCart: ShopCart, payload: CartProduct) {
    for (let i = 0; i < shopCart.items.length; i++) {
        if (shopCart.items[i].id === payload.id) {
            shopCart.sum -= shopCart.items[i].price * shopCart.items[i].count;
            shopCart.items.splice(i, 1);
        }
    }

    return shopCart;
}

export function incrementProductNumber(shopCart: ShopCart, payload: CartProduct) {
    for (let i = 0; i < shopCart.items.length; i++) {
        if (shopCart.items[i].id === payload.id) {
            shopCart.items[i].count++;
            shopCart.sum += shopCart.items[i].price;
        }
    }

    return shopCart;
}

export function decrementProductNumber(shopCart: ShopCart, payload: CartProduct) {
    for (let i = 0; i < shopCart.items.length; i++) {
        if (shopCart.items[i].id === payload.id && shopCart.items[i].count > 1) {
            shopCart.items[i].count--;
            shopCart.sum -= shopCart.items[i].price;
        } else if (shopCart.items[i].id === payload.id && shopCart.items[i].count > 1) {
            shopCart.sum -= shopCart.items[i].price;
            shopCart.items.splice(i, 1);
        }
    }

    return shopCart;
}

export function initShopCart(shopCart: ShopCart, payload) {
    shopCart.sum = payload.sum;
    shopCart.items = payload.items;
    shopCart.isCartVisible = true;

    return shopCart;
}

function checkIfProductIsInCart(product: CartProduct, products: CartProduct[]) {
    const cartItem = products.filter((item) => {
        return item.id === product.id
    })[0];

    return cartItem && cartItem !== undefined && cartItem !== null;
}
