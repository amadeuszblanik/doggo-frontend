import { createReducer, on } from '@ngrx/store';
import { ApiState } from '../../types/apiState.type';
import signInActions from '../actions/sign-in.actions';
import { SignInApiResponse } from '../../apiResponse/sign-in.api-response';
import { CommonErrorResponse } from '../../types/common-error-response.type';

export interface SignInState {
  data: SignInApiResponse | CommonErrorResponse | null;
  apiState: ApiState;
}

export const initialState: SignInState = {
  data: null,
  apiState: ApiState.Init,
};

export const signInReducer = createReducer(
  initialState,
  on(signInActions.fetch, (state) => ({ ...state, data: null, apiState: ApiState.Pending })),
  on(signInActions.fetchSuccess, (state, data) => {
    if (data.access_token) {
      localStorage.setItem('access_token', data.access_token);
    }

    return { ...state, data, apiState: ApiState.Success };
  }),
  on(signInActions.fetchFailed, (state, data) => ({ ...state, data, apiState: ApiState.Failed })),
);
