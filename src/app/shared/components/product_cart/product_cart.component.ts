import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products/products.service';
import {Store} from '@ngrx/store';
import {CartProduct} from '../../store/model/cart_product.model';
import {ShopCart} from 'app/shared/store/shop_cart.class';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product_cart.component.html',
  styleUrls: ['./product_cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  public isCartVisible = false;
  private products: CartProduct[] = [];

  constructor(private productsService: ProductsService, private store: Store<ShopCart>) {
    store.select('shopCart').subscribe((data) => this.products = data.items);
    console.log(this.products);
  }

  ngOnInit() {
  }

  public changeCartVisibility() {
    this.isCartVisible = !this.isCartVisible;
  }
}
