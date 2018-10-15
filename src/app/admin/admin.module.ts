import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { EditComponent } from './edit/edit.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    AuthComponent,
    AdminComponent,
    ProductsComponent,
    EditComponent,
    OrdersComponent
  ]
})
export class AdminModule { }
