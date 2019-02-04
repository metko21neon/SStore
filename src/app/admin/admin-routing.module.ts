import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { EditComponent } from './edit/edit.component';
import { OrdersComponent } from './orders/orders.component';

import { AuthGuard } from './auth.guard';
import {CanDeactivateGuard} from './can-deactivate.guard';
import {OrderDetailsComponent} from './order-details/order-details.component';

const routes: Routes = [
  { path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ProductsComponent, outlet: 'primary' },
      { path: '', component: OrdersComponent, outlet: 'order' },
      { path: 'products/:mode', component: EditComponent, canDeactivate: [CanDeactivateGuard], outlet: 'primary' },
      { path: 'products/:mode/:id', component: EditComponent, canDeactivate: [CanDeactivateGuard] },
      { path: 'order/:id', component: OrderDetailsComponent, outlet: 'order' },
      { path: '**', redirectTo: 'products' }
    ]},
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  providers: [AuthGuard],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
