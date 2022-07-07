import { createAction, props } from '@ngrx/store';
import { CommonErrorResponse } from '../../types/common-error-response.type';
import { PetsSingleApiResponse } from '../../apiResponse/pets-single.api-response';

export enum PetsActions {
  Fetch = '[Pets] Start fetch',
  FetchSuccess = '[Pets] Fetch ends with success',
  FetchFailed = '[Pets] Fetch ends with failed',
}

const fetch = createAction(PetsActions.Fetch);

const fetchSuccess = createAction(PetsActions.FetchSuccess, props<{ data: PetsSingleApiResponse[] }>());

const fetchFailed = createAction(PetsActions.FetchFailed, props<{ error: CommonErrorResponse }>());

const petsActions = {
  fetch,
  fetchSuccess,
  fetchFailed,
};

export default petsActions;
