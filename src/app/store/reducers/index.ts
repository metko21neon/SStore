import { ActionReducerMap, MetaReducer} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromProduct from './product.reducer';

export interface State {
  products: fromProduct.ProductsState;
}

export const reducers: ActionReducerMap<State> = {
  products: fromProduct.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

