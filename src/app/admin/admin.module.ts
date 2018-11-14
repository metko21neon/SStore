import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { EditComponent } from './edit/edit.component';
import { OrdersComponent } from './orders/orders.component';
import {MaterialModule} from '../material';
import { OrderDetailsComponent } from './order-details/order-details.component';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers, effects} from '../model/store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('prod', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [
    AdminComponent,
    ProductsComponent,
    EditComponent,
    OrdersComponent,
    OrderDetailsComponent
  ]
})
export class AdminModule { }
