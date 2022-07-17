import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import configActions, { ConfigActions } from './config.action';
import { ApiService } from '../../services/api.service';
import { catchError, map, mergeMap, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonErrorApiResponse } from '../../api-responses/common-error.api-response';

@Injectable()
export default class ConfigEffect {
  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConfigActions.Fetch),
      mergeMap(() =>
        this.apiService.config().pipe(
          map((data) => configActions.fetchSuccess({ data })),
          catchError((err: HttpErrorResponse) => of(configActions.fetchFailure({ error: err.error as CommonErrorApiResponse }))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
