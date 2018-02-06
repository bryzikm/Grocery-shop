import {AppComponent} from './app.component';
import {AppRouting} from './app.routing';
import {HttpClient} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ServicesModule} from './shared/services/services.module';
import {ComponentsModule} from './shared/components/components.module';
import {TemplatesModule} from './templates/templates.module';
import {CommonModule} from '@angular/common';
import {DependenciesModule} from './dependencies.module';
import {StoreModule} from '@ngrx/store';
import {ShopCartReducer} from './shared/store/reducer/shopcart.reducer';

export const ROOT_REDUCER: any = {
  shopCart: ShopCartReducer
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouting,
    ServicesModule.forRoot(),
    ComponentsModule.forRoot(),
    TemplatesModule,
    DependenciesModule.forRoot(),
    StoreModule.forRoot(ROOT_REDUCER)
  ],
  exports: [
    CommonModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
