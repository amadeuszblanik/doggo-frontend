import { createAction, props } from '@ngrx/store';
import { AuthSignUpDto } from '../../dto/auth-sign-up.dto';
import { MessageApiResponse } from '../../apiResponse/message.api-response';
import { CommonErrorResponse } from '../../types/common-error-response.type';

export enum SignUpActions {
  Fetch = '[SignUp] Start fetch',
  FetchSuccess = '[SignUp] Fetch ends with success',
  FetchFailed = '[SignUp] Fetch ends with failed',
}

const fetch = createAction(SignUpActions.Fetch, props<AuthSignUpDto>());

const fetchSuccess = createAction(SignUpActions.FetchSuccess, props<MessageApiResponse>());

const fetchFailed = createAction(SignUpActions.FetchFailed, props<CommonErrorResponse>());

const signUpActions = {
  fetch,
  fetchSuccess,
  fetchFailed,
};

export default signUpActions;
