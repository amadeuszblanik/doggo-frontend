import { createAction, props } from '@ngrx/store';
import { AuthResetPasswordDto } from '../../dto/auth-reset-password.dto';
import { CommonErrorResponse } from '../../types/common-error-response.type';
import { MessageApiResponse } from '../../apiResponse/message.api-response';

export enum AuthActions {
  RequestResetPasswordStart = '[Auth] Start request reset password',
  RequestResetPasswordSuccess = '[Auth] Request reset password ends with success',
  RequestResetPasswordFailed = '[Auth] Request reset password ends with fail',
  ResetPasswordStart = '[Auth] Start reset password',
  ResetPasswordSuccess = '[Auth] Reset password ends with success',
  ResetPasswordFailed = '[Auth] Reset password ends with fail',
}

const requestResetPasswordStart = createAction(AuthActions.RequestResetPasswordStart, props<{ userEmail: string }>());
const requestResetPasswordSuccess = createAction(AuthActions.RequestResetPasswordSuccess, props<{ response: MessageApiResponse }>());
const requestResetPasswordFailed = createAction(AuthActions.RequestResetPasswordFailed, props<{ response: CommonErrorResponse }>());

const resetPasswordStart = createAction(AuthActions.ResetPasswordStart, props<{ token: string; body: AuthResetPasswordDto }>());
const resetPasswordSuccess = createAction(AuthActions.ResetPasswordSuccess);
const resetPasswordFailed = createAction(AuthActions.ResetPasswordFailed, props<{ response: CommonErrorResponse }>());

const authActions = {
  requestResetPasswordStart,
  requestResetPasswordSuccess,
  requestResetPasswordFailed,
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFailed,
};

export default authActions;
