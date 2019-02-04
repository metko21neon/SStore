import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './storage/store/store.component';
import { CheckoutComponent } from './storage/checkout/checkout.component';
import { DetailsComponent } from './storage/details/details.component';
import {ProductDetailsComponent} from './storage/product-details/product-details.component';

import { StoreGuard } from './storage/store.guard';
import {AuthGuard} from './admin/auth.guard';
import {ProductDetailResolverService} from './model/core/product-detail-resolver.service';
import {AuthComponent} from './admin/auth/auth.component';

export const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'store', component: StoreComponent, canActivate: [StoreGuard] },
  { path: 'cart', component: DetailsComponent, canActivate: [StoreGuard] },
  { path: 'product/:id', component: ProductDetailsComponent, canActivate: [StoreGuard], resolve: { product: ProductDetailResolverService} },
  { path: 'checkout', component: CheckoutComponent, canActivate: [StoreGuard] },
  { path: 'admin', loadChildren: 'src/app/admin/admin.module#AdminModule', canLoad: [AuthGuard] },
  { path: '',   redirectTo: '/store', pathMatch: 'full' },
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
