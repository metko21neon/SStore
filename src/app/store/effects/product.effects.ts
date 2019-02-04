import { Injectable } from '@angular/core';

import {of} from 'rxjs';
import { Actions, Effect } from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';

import * as productActions from '../../store/actions';
import {RestDatasourceService} from '../../model/core/rest-datasourse.service';


@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions,
              private dataSource: RestDatasourceService) {}
  @Effect()
  loadProducts$ = this.actions$.ofType(productActions.ProductActionTypes.LOAD_PRODUCTS)
    .pipe(switchMap(() => {
      return this.dataSource.getProducts().pipe(
        map(products => new productActions.LoadProductsSuccess(products)),
        catchError(error => of(new productActions.LoadProductsFail(error)))
      );
    }));
}
