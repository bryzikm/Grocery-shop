import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlsService} from '../urls/urls.service';
import {ConstantsService} from '../constants/constants.service';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient, private urls: UrlsService) {
  }

  public getProducts() {
    return this.http.get(this.urls.DATA_URL);
  }

  public saveProducts(products) {
    sessionStorage.setItem(ConstantsService.SHOP_CART, JSON.stringify(products));
  }

  public checkIfProductsAreSaved() {
    const products = this.getProductsFromStorage();

    return products !== null;
  }

  public getProductsFromStorage() {
    return JSON.parse(sessionStorage.getItem(ConstantsService.SHOP_CART));
  }
}
