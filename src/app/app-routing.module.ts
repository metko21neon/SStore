import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store/store.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { DetailsComponent } from './store/details/details.component';

import { StoreGuard } from './store/store.guard';

const routes: Routes = [
  { path: 'store', component: StoreComponent, canActivate: [StoreGuard] },
  { path: 'cart', component: DetailsComponent, canActivate: [StoreGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [StoreGuard] },
  { path: 'admin', loadChildren: 'src/app/admin/admin.module#AdminModule', canActivate: [StoreGuard] },
  { path: '**', redirectTo: '/store' }
];

@NgModule({
  providers: [ StoreGuard ],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
