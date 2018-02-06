import {Component, OnDestroy} from '@angular/core';
import {ProductsService} from '../../services/products/products.service';
import {Store} from '@ngrx/store';
import {CartProduct} from '../../store/model/cart_product.model';
import {Observable} from 'rxjs/Observable';
import {ShopCart} from '../../store/shop_cart.class';
import {HIDE_CART, REMOVE, SHOW_CART} from '../../store/reducer/shopcart.reducer';

@Component({
    selector: 'app-product-cart',
    templateUrl: './product_cart.component.html',
    styleUrls: ['./product_cart.component.scss']
})
export class ProductCartComponent implements OnDestroy {
    public products: CartProduct[] = [];
    public areItemsInCart: boolean;
    public shopCartSubscription: Observable<ShopCart>;

    constructor(private productsService: ProductsService, private store: Store<any>) {
        this.shopCartSubscription = store.select('shopCart');
    }

    public showShopCart() {
        this.store.dispatch({type: SHOW_CART});
    }

    public hideShopCart() {
        this.store.dispatch({type: HIDE_CART});
    }

    public changeProductNumber() {
    }

    public removeProductFromCart(product) {
        this.store.dispatch({type: REMOVE, payload: product});
    }

    ngOnDestroy() {
        this.shopCartSubscription.subscribe((data) => {
            const state = {
                items: data.items,
                sum: data.sum
            };

            this.productsService.saveProducts(state);
        });
    }
}
