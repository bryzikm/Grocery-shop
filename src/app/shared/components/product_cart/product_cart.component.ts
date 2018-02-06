import {Component} from '@angular/core';
import {ProductsService} from '../../services/products/products.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {ShopCart} from '../../store/shop_cart.class';
import {DECREMENT, HIDE_CART, INCREMENT, REMOVE, SHOW_CART} from '../../store/reducer/shopcart.reducer';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product_cart.component.html',
  styleUrls: ['./product_cart.component.scss']
})
export class ProductCartComponent {
  public shopCartSubscription: Observable<ShopCart>;

  constructor(private productsService: ProductsService, private store: Store<any>) {
    this.shopCartSubscription = store.select('shopCart');

    /*store.select('shopCart').subscribe((data) => {
      const temp = {
        items: data.items,
        sum: data.sum
      };

      this.productsService.saveProducts(temp);
    });*/
  }

  public showShopCart() {
    this.store.dispatch({type: SHOW_CART});
  }

  public hideShopCart() {
    this.store.dispatch({type: HIDE_CART});
  }

  public incrementProductNumber(product) {
    this.store.dispatch({type: INCREMENT, payload: product});
  }

  public decrementProductNumber(product) {
    this.store.dispatch({type: DECREMENT, payload: product});
  }

  public removeProductFromCart(product) {
    this.store.dispatch({type: REMOVE, payload: product});
  }
}
