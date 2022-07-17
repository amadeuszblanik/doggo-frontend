import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import petsActions, { PetsActions } from './pets.action';
import { ApiService } from '../../services/api.service';
import { catchError, map, mergeMap, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonErrorApiResponse } from '../../api-responses/common-error.api-response';

@Injectable()
export default class PetsEffect {
  petsFetch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetsActions.Fetch),
      mergeMap(() =>
        this.apiService.myPets().pipe(
          map((data) => petsActions.fetchSuccess({ data })),
          catchError((err: HttpErrorResponse) => of(petsActions.fetchFailure({ error: err.error as CommonErrorApiResponse }))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
