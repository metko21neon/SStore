import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { RouterModule } from '@angular/router';
import {MaterialModule} from '../material';

import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { CounterDirective } from './counter.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModelModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    StoreComponent,
    CounterDirective,
    CartComponent,
    DetailsComponent,
    CheckoutComponent,
  ],
  exports: [
    StoreComponent,
    CounterDirective,
    CartComponent,
    DetailsComponent,
    CheckoutComponent
  ]
})
export class StoreModule { }
