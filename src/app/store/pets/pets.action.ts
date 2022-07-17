import { createAction, props } from '@ngrx/store';
import { PetsMyApiResponse } from '../../api-responses/pets-my.api-response';
import { CommonErrorApiResponse } from '../../api-responses/common-error.api-response';

export enum PetsActions {
  Fetch = '[Pets] Fetch',
  FetchSuccess = '[Pets] Fetch success',
  FetchFailure = '[Pets] Fetch failure',
}

const fetch = createAction(PetsActions.Fetch);
const fetchSuccess = createAction(PetsActions.FetchSuccess, props<{ data: PetsMyApiResponse[] }>());
const fetchFailure = createAction(PetsActions.FetchFailure, props<{ error: CommonErrorApiResponse }>());

const petsActions = {
  fetch,
  fetchSuccess,
  fetchFailure,
};

export default petsActions;
