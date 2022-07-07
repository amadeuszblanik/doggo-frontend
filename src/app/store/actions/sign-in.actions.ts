import { createAction, props } from '@ngrx/store';
import { AuthSignInDto } from '../../dto/auth-sign-in.dto';
import { SignInApiResponse } from '../../apiResponse/sign-in.api-response';
import { CommonErrorResponse } from '../../types/common-error-response.type';

export enum SignInActions {
  Fetch = '[SignIn] Start fetch',
  FetchSuccess = '[SignIn] Fetch ends with success',
  FetchFailed = '[SignIn] Fetch ends with failed',
}

const fetch = createAction(SignInActions.Fetch, props<AuthSignInDto>());

const fetchSuccess = createAction(SignInActions.FetchSuccess, props<SignInApiResponse>());

const fetchFailed = createAction(SignInActions.FetchFailed, props<CommonErrorResponse>());

const signInActions = {
  fetch,
  fetchSuccess,
  fetchFailed,
};

export default signInActions;
