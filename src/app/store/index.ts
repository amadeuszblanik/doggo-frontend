import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { authReducer, AuthState } from './auth/auth.reducer';
import { configReducer, ConfigState } from './config/config.reducer';
import { petsReducer, PetsState } from './pets/pets.reducer';

export const STORE_LOCAL_STORAGE_KEY = 'store';

export interface AppState {
  auth: AuthState;
  config: ConfigState;
  pets: PetsState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  config: configReducer,
  pets: petsReducer,
};

const storePersistent = (reducer: ActionReducer<AppState>) => (state: AppState, action: Action) => {
  if (action.type === '@ngrx/store/init') {
    const storageValue = localStorage.getItem(STORE_LOCAL_STORAGE_KEY);

    if (storageValue) {
      try {
        return JSON.parse(storageValue) as AppState;
      } catch (e) {
        localStorage.removeItem(STORE_LOCAL_STORAGE_KEY);

        return reducers;
      }
    }
  }

  const nextState = reducer(state, action);
  localStorage.setItem(STORE_LOCAL_STORAGE_KEY, JSON.stringify(nextState));

  return nextState;
};

export const metaReducers: MetaReducer[] = [storePersistent];
