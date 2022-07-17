import { ApiState } from '../../types/api-state.type';
import authActions from './auth.action';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { CommonErrorApiResponse } from '../../api-responses/common-error.api-response';
import { AppState } from '../index';

export const AUTH_LOCAL_STORAGE_KEY = 'auth';

export interface AuthState {
  signInState: ApiState;
  signInError: CommonErrorApiResponse | null;
  accessToken: string | null;
}

const initialState: AuthState = {
  signInState: ApiState.Init,
  signInError: null,
  accessToken: null,
};

export const authReducer = createReducer(
  initialState,
  on(authActions.signIn, (state) => ({ ...state, signInState: ApiState.Pending })),
  on(authActions.signInSuccess, (state, { accessToken }) => ({ ...state, signInState: ApiState.Success, accessToken, signInError: null })),
  on(authActions.signInFailure, (state, { error }) => ({ ...state, signInState: ApiState.Failure, signInError: error })),
);

export const authMetaReducer = (reducer: ActionReducer<AppState>) => (state: AppState, action: Action) => {
  if (action.type === '@ngrx/store/init') {
    const storageValue = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY);

    if (storageValue) {
      try {
        return JSON.parse(storageValue) as AuthState;
      } catch (e) {
        localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);

        return initialState;
      }
    }
  }

  const nextState = reducer(state, action);
  localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, JSON.stringify(nextState));

  return nextState;
};
