import { createAction, props } from '@ngrx/store';
import { CommonErrorApiResponse } from '../../api-responses/common-error.api-response';
import { AuthSignInDto } from '../../dto/auth-sign-in.dto';
import { CommonMessageApiResponse } from '../../api-responses/common-message.api-response';
import { AuthSignUpDto } from '../../dto/auth-sign-up.dto';

export enum AuthActions {
  SignIn = '[Auth] Sign In',
  SignInSuccess = '[Auth] Sign In Success',
  SignInFailure = '[Auth] Sign In Failure',
  SignInReset = '[Auth] Sign In Reset',
  SignUp = '[Auth] Sign Up',
  SignUpSuccess = '[Auth] Sign Up Success',
  SignUpFailure = '[Auth] Sign Up Failure',
}

const signIn = createAction(AuthActions.SignIn, props<AuthSignInDto>());
const signInSuccess = createAction(AuthActions.SignInSuccess, props<{ accessToken: string }>());
const signInFailure = createAction(AuthActions.SignInFailure, props<{ error: CommonErrorApiResponse }>());
const signInReset = createAction(AuthActions.SignInReset);

const signUp = createAction(AuthActions.SignUp, props<AuthSignUpDto>());
const signUpSuccess = createAction(AuthActions.SignUpSuccess, props<{ data: CommonMessageApiResponse }>());
const signUpFailure = createAction(AuthActions.SignUpFailure, props<{ error: CommonErrorApiResponse }>());

const authActions = {
  signIn,
  signInSuccess,
  signInFailure,
  signInReset,
  signUp,
  signUpSuccess,
  signUpFailure,
};

export default authActions;
