import { createReducer, on } from '@ngrx/store';
import { ApiState } from '../../types/apiState.type';
import authActions from '../actions/auth.actions';
import { CommonErrorResponse } from '../../types/common-error-response.type';
import { MessageApiResponse } from '../../apiResponse/message.api-response';

export interface AuthState {
  requestResetPasswordRequestError: CommonErrorResponse | null;
  requestResetPasswordRequestData: MessageApiResponse | null;
  requestResetPasswordRequestState: ApiState;

  resetPasswordRequestError: CommonErrorResponse | null;
  resetPasswordRequestState: ApiState;
}

export const initialState: AuthState = {
  requestResetPasswordRequestError: null,
  requestResetPasswordRequestData: null,
  requestResetPasswordRequestState: ApiState.Init,
  resetPasswordRequestError: null,
  resetPasswordRequestState: ApiState.Init,
};

export const authReducer = createReducer(
  initialState,
  on(authActions.requestResetPasswordStart, (state) => ({ ...state, requestResetPasswordRequestState: ApiState.Pending })),
  on(authActions.requestResetPasswordSuccess, (state, { response }) => ({
    ...state,
    requestResetPasswordRequestData: response,
    requestResetPasswordRequestState: ApiState.Success,
  })),
  on(authActions.requestResetPasswordFailed, (state, { response }) => ({
    ...state,
    requestResetPasswordRequestError: response,
    requestResetPasswordRequestState: ApiState.Failed,
  })),

  on(authActions.resetPasswordStart, (state) => ({ ...state, resetPasswordRequestState: ApiState.Pending })),
  on(authActions.resetPasswordStart, (state) => ({ ...state, resetPasswordRequestState: ApiState.Success })),
  on(authActions.resetPasswordFailed, (state, { response }) => ({
    ...state,
    resetPasswordRequestError: response,
    resetPasswordRequestState: ApiState.Failed,
  })),
);
