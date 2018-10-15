import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { EditComponent } from './edit/edit.component';
import { OrdersComponent } from './orders/orders.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: AdminComponent, canActivate: [AuthGuard],
    children: [
      { path: 'products/:mode/:id', component: EditComponent },
      { path: 'products/:mode', component: EditComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'orders', component: OrdersComponent },
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
