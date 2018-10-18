import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store/store.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { DetailsComponent } from './store/details/details.component';
import {ProductDetailsComponent} from './store/product-details/product-details.component';

import { StoreGuard } from './store/store.guard';
import {AuthGuard} from './admin/auth.guard';
import {ProductDetailResolverService} from './model/core/product-detail-resolver.service';
import {AuthComponent} from './admin/auth/auth.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'store', component: StoreComponent, canActivate: [StoreGuard] },
  { path: 'cart', component: DetailsComponent, canActivate: [StoreGuard] },
  { path: 'product/:id', component: ProductDetailsComponent, canActivate: [StoreGuard], resolve: { product: ProductDetailResolverService} },
  { path: 'checkout', component: CheckoutComponent, canActivate: [StoreGuard] },
  { path: 'admin', loadChildren: 'src/app/admin/admin.module#AdminModule', canActivate: [StoreGuard], canLoad: [AuthGuard] },
  { path: '**', redirectTo: '/store' }
];

@NgModule({
  providers: [
    StoreGuard,
    ProductDetailResolverService ],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
