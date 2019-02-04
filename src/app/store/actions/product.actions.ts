import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import {IProduct, Product} from '../../model/product.model';

export enum ProductActionTypes {
  LOAD_PRODUCTS = '[Products] Load Product',
  LOAD_PRODUCTS_FAIL = '[Products] Load Product Fail',
  LOAD_PRODUCTS_SUCCESS = '[Products] Load Product Success',
  AddProduct = '[Product] Add Product',
  UpsertProduct = '[Product] Upsert Product',
  AddProducts = '[Product] Add Products',
  UpsertProducts = '[Product] Upsert Products',
  UpdateProduct = '[Product] Update Product',
  UpdateProducts = '[Product] Update Products',
  DeleteProduct = '[Product] Delete Product',
  DeleteProducts = '[Product] Delete Products',
  ClearProducts = '[Product] Clear Products'
}

export class LoadProducts implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS;
}

export class LoadProductsFail implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS_FAIL;
  constructor(public payload: any) { }
}

export class LoadProductsSuccess implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: IProduct[]) { }
}

export class AddProduct implements Action {
  readonly type = ProductActionTypes.AddProduct;

  constructor(public payload: Product ) {}
}

export class UpsertProduct implements Action {
  readonly type = ProductActionTypes.UpsertProduct;

  constructor(public payload: { product: Product }) {}
}

export class AddProducts implements Action {
  readonly type = ProductActionTypes.AddProducts;

  constructor(public payload: { products: Product[] }) {}
}

export class UpsertProducts implements Action {
  readonly type = ProductActionTypes.UpsertProducts;

  constructor(public payload: { products: Product[] }) {}
}

export class UpdateProduct implements Action {
  readonly type = ProductActionTypes.UpdateProduct;

  constructor(public payload: { product: Update<Product> }) {}
}

export class UpdateProducts implements Action {
  readonly type = ProductActionTypes.UpdateProducts;

  constructor(public payload: { products: Update<Product>[] }) {}
}

export class DeleteProduct implements Action {
  readonly type = ProductActionTypes.DeleteProduct;

  constructor(public payload: { id: string }) {}
}

export class DeleteProducts implements Action {
  readonly type = ProductActionTypes.DeleteProducts;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearProducts implements Action {
  readonly type = ProductActionTypes.ClearProducts;
}

export type ProductActions =
 LoadProducts
 | LoadProductsFail
 | LoadProductsSuccess
 | AddProduct
 | UpsertProduct
 | AddProducts
 | UpsertProducts
 | UpdateProduct
 | UpdateProducts
 | DeleteProduct
 | DeleteProducts
 | ClearProducts;
