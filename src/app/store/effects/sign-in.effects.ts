import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import signInActions from '../actions/sign-in.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { CommonErrorResponse } from '../../types/common-error-response.type';
import { SignInApiResponse } from '../../apiResponse/sign-in.api-response';
import { SignInActions } from '../actions/sign-in.actions';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class SignInEffects {
  fetch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SignInActions.Fetch),
      mergeMap((value) =>
        this.apiService.signIn(value).pipe(
          map((response) => signInActions.fetchSuccess(response as SignInApiResponse)),
          catchError((err: HttpErrorResponse) => of(signInActions.fetchFailed(err.error as CommonErrorResponse))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
