import { createReducer, on } from '@ngrx/store';
import { ApiState } from '../../types/apiState.type';
import signUpActions from '../actions/sign-up.actions';
import { MessageApiResponse } from '../../apiResponse/message.api-response';
import { CommonErrorResponse } from '../../types/common-error-response.type';

export interface SignUpState {
  data: MessageApiResponse | CommonErrorResponse | null;
  apiState: ApiState;
}

export const initialState: SignUpState = {
  data: null,
  apiState: ApiState.Init,
};

export const signUpReducer = createReducer(
  initialState,
  on(signUpActions.fetch, (state) => ({ ...state, data: null, apiState: ApiState.Pending })),
  on(signUpActions.fetchSuccess, (state, data) => ({ ...state, data, apiState: ApiState.Success })),
  on(signUpActions.fetchFailed, (state, data) => ({ ...state, data, apiState: ApiState.Failed })),
);
