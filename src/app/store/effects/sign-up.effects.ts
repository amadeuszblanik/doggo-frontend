import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import signUpActions from '../actions/sign-up.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { CommonErrorResponse } from '../../types/common-error-response.type';
import { MessageApiResponse } from '../../apiResponse/message.api-response';
import { SignUpActions } from '../actions/sign-up.actions';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class SignUpEffects {
  fetch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SignUpActions.Fetch),
      mergeMap((value) =>
        this.apiService.signUp(value).pipe(
          map((response) => signUpActions.fetchSuccess(response as MessageApiResponse)),
          catchError((err: HttpErrorResponse) => of(signUpActions.fetchFailed(err.error as CommonErrorResponse))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
