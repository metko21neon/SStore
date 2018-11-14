import {Injectable} from '@angular/core';

import {of} from 'rxjs';
import {Effect, Actions} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';

import * as productActions from '../actions/product.action';
import {RestDatasourceService} from '../../core/rest-datasourse.service';

@Injectable()
export class ProductEffect {
  constructor(private actions$: Actions,
              private dataSource: RestDatasourceService) {}
  @Effect()
  loadProducts$ = this.actions$.ofType(productActions.ProductsActionTypes.LOAD_PRODUCTS)
    .pipe(switchMap(() => {
      return this.dataSource.getProducts().pipe(
        map(products => new productActions.LoadProductsSuccess(products)),
        catchError(error => of(new productActions.LoadProductsFail(error)))
      );
    }));
}
