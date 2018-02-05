import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../shared/components/components.module';
import {ServicesModule} from '../shared/services/services.module';
import {DependenciesModule} from '../dependencies.module';
import {RouterModule} from '@angular/router';
import {ShopComponent} from './shop/shop.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    ServicesModule,
    DependenciesModule
  ],
  declarations: [
    ShopComponent
  ],
  providers: []
})
export class TemplatesModule {
}
