import { ApiState } from '../../types/api-state.type';
import authActions from './auth.action';
import { createReducer, on } from '@ngrx/store';
import { CommonErrorApiResponse } from '../../api-responses/common-error.api-response';
import { CommonMessageApiResponse } from '../../api-responses/common-message.api-response';

export interface AuthState {
  accessToken: string | null;

  signInState: ApiState;
  signInError: CommonErrorApiResponse | null;

  signUpState: ApiState;
  signUpResponse: CommonMessageApiResponse | null;
  signUpError: CommonErrorApiResponse | null;
}

const initialState: AuthState = {
  accessToken: null,

  signInState: ApiState.Init,
  signInError: null,

  signUpState: ApiState.Init,
  signUpResponse: null,
  signUpError: null,
};

export const authReducer = createReducer(
  initialState,
  on(authActions.signIn, (state) => ({ ...state, signInState: ApiState.Pending })),
  on(authActions.signInReset, (state) => ({ ...state, signInState: state.accessToken ? state.signInState : ApiState.Init })),
  on(authActions.signInSuccess, (state, { accessToken }) => ({ ...state, signInState: ApiState.Success, accessToken, signInError: null })),
  on(authActions.signInFailure, (state, { error }) => ({ ...state, signInState: ApiState.Failure, signInError: error })),

  on(authActions.signUp, (state) => ({ ...state, signUpState: ApiState.Pending, accessToken: null })),
  on(authActions.signUpSuccess, (state, { data }) => ({
    ...state,
    signUpState: ApiState.Success,
    signUpResponse: data,
    accessToken: null,
    signUpError: null,
  })),
  on(authActions.signUpFailure, (state, { error }) => ({
    ...state,
    signUpState: ApiState.Failure,
    signUpResponse: null,
    accessToken: null,
    signUpError: error,
  })),
);
