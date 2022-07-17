import { createAction, props } from '@ngrx/store';
import { CommonErrorApiResponse } from '../../api-responses/common-error.api-response';
import { AuthSignInDto } from '../../dto/auth-sign-in.dto';

export enum AuthActions {
  SignIn = '[Auth] Sign In',
  SignInSuccess = '[Auth] Sign In Success',
  SignInFailure = '[Auth] Sign In Failure',
}

const signIn = createAction(AuthActions.SignIn, props<AuthSignInDto>());
const signInSuccess = createAction(AuthActions.SignInSuccess, props<{ accessToken: string }>());
const signInFailure = createAction(AuthActions.SignInFailure, props<{ error: CommonErrorApiResponse }>());

const authActions = {
  signIn,
  signInSuccess,
  signInFailure,
};

export default authActions;
