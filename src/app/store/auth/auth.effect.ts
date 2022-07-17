import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import authActions, { AuthActions } from './auth.action';
import { ApiService } from '../../services/api.service';
import { catchError, map, mergeMap, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonErrorApiResponse } from '../../api-responses/common-error.api-response';
import { AuthSignInDto } from '../../dto/auth-sign-in.dto';

@Injectable()
export default class AuthEffect {
  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.SignIn),
      mergeMap((body: AuthSignInDto) =>
        this.apiService.signIn(body).pipe(
          map(({ access_token: accessToken }) => authActions.signInSuccess({ accessToken })),
          catchError((err: HttpErrorResponse) => of(authActions.signInFailure({ error: err.error as CommonErrorApiResponse }))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
