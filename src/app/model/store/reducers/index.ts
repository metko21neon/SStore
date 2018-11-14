import * as fromProducts from './product.reducer';
import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';

export interface State {
  products: fromProducts.ProductsState;
}
export const reducers: ActionReducerMap<State> = {
  products: fromProducts.ProductsReducer
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<any>[] = [debug];

export const selectState = createFeatureSelector<State>('prod');

export const selectProductsState = createSelector(selectState, (state: State) => state.products);
export const selectProducts = createSelector(selectProductsState, fromProducts.getProducts);
export const selectProductsLoaded = createSelector(selectProductsState, fromProducts.getProductsLoaded);
export const selectProductsLoading = createSelector(selectProductsState, fromProducts.getProductsLoading);
