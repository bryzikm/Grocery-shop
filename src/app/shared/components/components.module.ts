import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DependenciesModule} from '../../dependencies.module';
import {ServicesModule} from '../services/services.module';
import { ProductCartComponent } from './product_cart/product_cart.component';
import { ProductListComponent } from './product_list/product_list.component';

@NgModule({
  imports: [
    CommonModule,
    DependenciesModule,
    ServicesModule
  ],
  declarations: [
    ProductCartComponent,
    ProductListComponent
  ],
  exports: [
    ProductCartComponent,
    ProductListComponent
  ]
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ComponentsModule,
      providers: [
      ]
    };
  }
}
