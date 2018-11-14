import {ProductsAction, ProductsActionTypes} from '../actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {IProduct} from '../../product.model';

export const adapter: EntityAdapter<IProduct> = createEntityAdapter<IProduct>();
export interface ProductsState extends EntityState<IProduct> {
  loaded: boolean;
  loading: boolean;
  selectedUserId: number | null;
}

export const initialProductsState: ProductsState = adapter.getInitialState({
  loaded: false,
  loading: false,
  selectedUserId: null
});

export function ProductsReducer(state = initialProductsState, action: ProductsAction): ProductsState {
  switch (action.type) {
    case ProductsActionTypes.LOAD_PRODUCTS: {
      return {
        ...state,
        loading: true
      };
    }
    case ProductsActionTypes.LOAD_PRODUCTS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case ProductsActionTypes.LOAD_PRODUCTS_SUCCESS:
      return adapter.addAll(action.payload, state);
    case ProductsActionTypes.ADD_PRODUCT:
      return adapter.addOne(action.payload, state);
    default:
      return state;
  }
}

export const getProducts = (state: ProductsState) => state.entities;
export const getProductsLoaded = (state: ProductsState) => state.loaded;
export const getProductsLoading = (state: ProductsState) => state.loading;
