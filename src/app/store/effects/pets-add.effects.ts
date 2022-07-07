import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import petsAddActions, { PetsAddActions } from '../actions/pets-add.actions';
import { ApiService } from '../../services/api.service';
import { CommonErrorResponse } from '../../types/common-error-response.type';

@Injectable()
export class PetsAddEffects {
  fetch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetsAddActions.Fetch),
      mergeMap(({ body }) =>
        this.apiService.petsAdd(body).pipe(
          map((response) => petsAddActions.fetchSuccess({ data: response })),
          catchError((err: { error: CommonErrorResponse }) => of(petsAddActions.fetchFailed({ error: err.error }))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
