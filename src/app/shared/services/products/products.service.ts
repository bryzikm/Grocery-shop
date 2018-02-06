import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlsService} from '../urls/urls.service';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient, private urls: UrlsService) {
  }

  public getProducts() {
    return this.http.get(this.urls.DATA_URL);
  }
}
