import { Action } from '@ngrx/store';
import {IProduct} from '../../product.model';

export enum ProductsActionTypes {
  LOAD_PRODUCTS = '[Products] Load Product',
  LOAD_PRODUCTS_FAIL = '[Products] Load Product Fail',
  LOAD_PRODUCTS_SUCCESS = '[Products] Load Product Success',
  ADD_PRODUCT = '[Products] AddProduct',
  DELETE_PRODUCT = '[Products] DeleteProduct',
}

export class LoadProducts implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCTS;
}

export class LoadProductsFail implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCTS_FAIL;
  constructor(public payload: any) { }
}

export class LoadProductsSuccess implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: IProduct[]) { }
}

export class AddProduct implements Action {
  readonly type = ProductsActionTypes.ADD_PRODUCT;

  constructor(public payload: IProduct) { }
}

export class DeleteProduct implements Action {
  readonly type = ProductsActionTypes.DELETE_PRODUCT;

  constructor(public payload: IProduct) { }
}

export type ProductsAction = LoadProducts | LoadProductsFail | LoadProductsSuccess | AddProduct | DeleteProduct;
