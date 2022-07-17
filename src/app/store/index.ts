import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { authMetaReducer, authReducer, AuthState } from './auth/auth.reducer';

export interface AppState {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
};

export const metaReducers: MetaReducer[] = [authMetaReducer];
