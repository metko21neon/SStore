import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductRepositoryService } from './core/product-repository.service';
import { OrderRepositoryService } from './core/order-repository.service';
import { RestDatasourceService } from './core/rest-datasourse.service';
import { DatasourceService } from './core/datasource.service';
import { RepositoryService } from './core/repository.service';
import { OrderService } from './core/order.service';
import { CartService } from './core/cart.service';
import { AuthService } from './core/auth.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ProductRepositoryService,
    OrderRepositoryService,
    RestDatasourceService,
    RepositoryService,
    OrderService,
    CartService,
    AuthService,
    { provide: DatasourceService, useClass: RestDatasourceService }
  ]
})
export class ModelModule { }
