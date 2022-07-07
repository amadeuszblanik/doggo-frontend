import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import petsActions, { PetsActions } from '../actions/pets.actions';
import { ApiService } from '../../services/api.service';
import { CommonErrorResponse } from '../../types/common-error-response.type';

@Injectable()
export class PetsEffects {
  fetch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetsActions.Fetch),
      mergeMap(() =>
        this.apiService.petsList().pipe(
          map((response) => petsActions.fetchSuccess({ data: response })),
          catchError((err: { error: CommonErrorResponse }) => of(petsActions.fetchFailed({ error: err.error }))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
