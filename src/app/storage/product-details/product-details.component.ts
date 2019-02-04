import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {Product} from '../../model/product.model';
import {ProductRepositoryService} from '../../model/core/product-repository.service';
import {RestDatasourceService} from '../../model/core/rest-datasourse.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {
  public product$: Product;
  constructor( private route: ActivatedRoute,
               private product: ProductRepositoryService,
               private dataSource: RestDatasourceService) {
  }

  ngOnInit() {
    this.get();
  }
  get() {
      // this.product$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.product.getProduct(params.get('id'))));
      this.route.data.subscribe(( data: {product: Product}) => this.product$ = data.product );
  }

}
