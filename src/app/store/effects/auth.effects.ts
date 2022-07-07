import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import authActions, { AuthActions } from '../actions/auth.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { CommonErrorResponse } from '../../types/common-error-response.type';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageApiResponse } from '../../apiResponse/message.api-response';

@Injectable()
export class AuthEffects {
  RequestResetPasswordStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.RequestResetPasswordStart),
      mergeMap(({ userEmail }) =>
        this.apiService.requestResetPassword(userEmail).pipe(
          map((response) => authActions.requestResetPasswordSuccess({ response: response as MessageApiResponse })),
          catchError((err: HttpErrorResponse) =>
            of(authActions.requestResetPasswordFailed({ response: err.error as CommonErrorResponse })),
          ),
        ),
      ),
    ),
  );

  ResetPasswordStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.ResetPasswordStart),
      mergeMap(({ token, body }) =>
        this.apiService.resetPassword(token, body).pipe(
          map(() => authActions.resetPasswordSuccess()),
          catchError((err: HttpErrorResponse) => of(authActions.resetPasswordFailed({ response: err.error as CommonErrorResponse }))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
