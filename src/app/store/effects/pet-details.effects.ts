import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import petDetailsActions, { PetDetailsActions } from '../actions/pet-details.actions';
import { ApiService } from '../../services/api.service';
import { CommonErrorResponse } from '../../types/common-error-response.type';

@Injectable()
export class PetDetailsEffects {
  fetch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetDetailsActions.Fetch),
      mergeMap(({ id }) =>
        this.apiService.petDetails(id).pipe(
          map((response) => petDetailsActions.fetchSuccess({ data: response })),
          catchError((err: { error: CommonErrorResponse }) => of(petDetailsActions.fetchFailed({ error: err.error }))),
        ),
      ),
    ),
  );

  addWeight$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetDetailsActions.AddWeight),
      mergeMap(({ id, body }) =>
        this.apiService.petWeightAdd(id, body).pipe(
          mergeMap((response) => [petDetailsActions.addWeightSuccess({ data: response }), petDetailsActions.fetch({ id })]),
          catchError((err: { error: CommonErrorResponse }) => of(petDetailsActions.addWeightFailed({ error: err.error }))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
