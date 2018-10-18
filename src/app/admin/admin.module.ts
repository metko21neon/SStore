import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { EditComponent } from './edit/edit.component';
import { OrdersComponent } from './orders/orders.component';
import {MaterialModule} from '../material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    MaterialModule
  ],
  declarations: [
    AdminComponent,
    ProductsComponent,
    EditComponent,
    OrdersComponent
  ]
})
export class AdminModule { }
