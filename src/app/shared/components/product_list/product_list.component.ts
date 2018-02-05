import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products/products.service';
import {Product} from '../../services/products/product.model';
import {LoggerService} from '../../services/logger/logger.service';
import {ConstantsService} from '../../services/constants/constants.service';
import {ShopCart} from '../../store/shop_cart.class';
import {Store} from '@ngrx/store';
import {ADD} from "../../store/reducer/shopcart.reducer";

@Component({
  selector: 'app-product-list',
  templateUrl: './product_list.component.html',
  styleUrls: ['./product_list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  public sortType = null;

  constructor(private productsService: ProductsService, private store: Store<ShopCart>) {
  }

  ngOnInit() {
    this.getProductsList();
  }

  public addProductToCart(product: Product) {
    const stateAction = {
      type: ADD,
      payload: product
    };

    this.store.dispatch(stateAction);
  }

  public sortProductsBySortType() {
    if (this.sortType === ConstantsService.PRICE) {
      this.products.sort(this.sortArrayByProperty('price'));
    } else if (this.sortType === ConstantsService.NAME) {
      this.products.sort(this.sortArrayByProperty('name'));
    }
  }

  private sortArrayByProperty(propertyName) {
    return function (first, second) {
      return ((first[propertyName] === second[propertyName]) ? 0 : ((first[propertyName] > second[propertyName]) ? 1 : -1));
    };
  }

  private getProductsList() {
    this.productsService.getProducts().subscribe(
      (data) => this.getProductsListSuccess(data),
      (error) => LoggerService.logError(error)
    );
  }

  private getProductsListSuccess(data) {
    this.products = data;
  }
}
