import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShopComponent} from './templates/shop/shop.component';


const ROUTES: Routes = [
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: '**',
    redirectTo: 'shop'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ROUTES
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting {
}
