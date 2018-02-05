import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UrlsService} from './urls/urls.service';
import {ProductsService} from './products/products.service';
import {LoggerService} from './logger/logger.service';
import {ConstantsService} from './constants/constants.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        UrlsService,
        ProductsService,
        LoggerService,
        ConstantsService
      ]
    };
  }
}
