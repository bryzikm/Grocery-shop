import {ConstantsService} from '../constants/constants.service';

export class StorageService {
  public static saveToStorage(data) {
    sessionStorage.setItem(ConstantsService.SHOP_CART, JSON.stringify(data));
  }

  public static checkIfProductsAreSaved() {
    const products = this.getProductsFromStorage();

    return products !== null;
  }

  public static getProductsFromStorage() {
    return JSON.parse(sessionStorage.getItem(ConstantsService.SHOP_CART));
  }
}
