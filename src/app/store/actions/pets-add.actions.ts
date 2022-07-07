import { createAction, props } from '@ngrx/store';
import { CommonErrorResponse } from '../../types/common-error-response.type';
import { PetsSingleApiResponse } from '../../apiResponse/pets-single.api-response';
import { PetCreateDto } from '../../dto/pet-add.dto';

export enum PetsAddActions {
  Fetch = '[Pets Add] Start fetch',
  FetchSuccess = '[Pets Add] Fetch ends with success',
  FetchFailed = '[Pets Add] Fetch ends with failed',
  Reset = '[Pets Add] Reset',
}

const fetch = createAction(PetsAddActions.Fetch, props<{ body: PetCreateDto }>());

const fetchSuccess = createAction(PetsAddActions.FetchSuccess, props<{ data: PetsSingleApiResponse }>());

const fetchFailed = createAction(PetsAddActions.FetchFailed, props<{ error: CommonErrorResponse }>());

const reset = createAction(PetsAddActions.Reset);

const petsAddActions = {
  fetch,
  fetchSuccess,
  fetchFailed,
  reset,
};

export default petsAddActions;
