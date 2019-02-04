import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ProductActions, ProductActionTypes } from '../actions';
import {Product} from '../../model/product.model';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface ProductsState extends EntityState<Product> {
  loaded: boolean;
  loading: boolean;
  selectedUserId: number | null;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: ProductsState = adapter.getInitialState({
  loaded: false,
  loading: false,
  selectedUserId: null
});

export function reducer(state = initialState, action: ProductActions): ProductsState {
  switch (action.type) {
    case ProductActionTypes.LOAD_PRODUCTS:
      return { ...state, loading: true };
    case ProductActionTypes.LOAD_PRODUCTS_FAIL:
      return { ...state, loading: false };
    case ProductActionTypes.LOAD_PRODUCTS_SUCCESS:
      return adapter.addAll(action.payload, state);
    case ProductActionTypes.AddProduct:
      return adapter.addOne(action.payload, state);
    case ProductActionTypes.UpsertProduct:
      return adapter.upsertOne(action.payload.product, state);
    case ProductActionTypes.AddProducts:
      return adapter.addMany(action.payload.products, state);
    case ProductActionTypes.UpsertProducts:
      return adapter.upsertMany(action.payload.products, state);
    case ProductActionTypes.UpdateProduct:
      return adapter.updateOne(action.payload.product, state);
    case ProductActionTypes.UpdateProducts:
      return adapter.updateMany(action.payload.products, state);
    case ProductActionTypes.DeleteProduct:
      return adapter.removeOne(action.payload.id, state);
    case ProductActionTypes.DeleteProducts:
      return adapter.removeMany(action.payload.ids, state);
    case ProductActionTypes.ClearProducts:
      return adapter.removeAll(state);
    default:
      return state;
  }
}

export const selectState = createFeatureSelector<ProductsState>('products');
export const { selectIds, selectEntities, selectAll, selectTotal,} = adapter.getSelectors(selectState);
const getProductsLoaded = (state: ProductsState) => state.loaded;
const getProductsLoading = (state: ProductsState) => state.loading;

export const selectProductsLoaded = createSelector(selectState, getProductsLoaded);
export const selectProductsLoading = createSelector(selectState, getProductsLoading);
