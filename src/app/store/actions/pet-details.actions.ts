import { createAction, props } from '@ngrx/store';
import { CommonErrorResponse } from '../../types/common-error-response.type';
import { PetsSingleApiResponse } from '../../apiResponse/pets-single.api-response';
import { PetWeightCreateDto } from '../../dto/pet-weight-create.dto';

export enum PetDetailsActions {
  Fetch = '[Pet Details] Start fetch',
  FetchSuccess = '[Pet Details] Fetch ends with success',
  FetchFailed = '[Pet Details] Fetch ends with failed',
  AddWeight = '[Pet Details] Start add weight',
  AddWeightSuccess = '[Pet Details] Add weight ends with success',
  AddWeightFailed = '[Pet Details] Add weight ends with failed',
}

const fetch = createAction(PetDetailsActions.Fetch, props<{ id: string }>());
const fetchSuccess = createAction(PetDetailsActions.FetchSuccess, props<{ data: PetsSingleApiResponse }>());
const fetchFailed = createAction(PetDetailsActions.FetchFailed, props<{ error: CommonErrorResponse }>());

const addWeight = createAction(PetDetailsActions.AddWeight, props<{ id: number; body: PetWeightCreateDto }>());
const addWeightSuccess = createAction(PetDetailsActions.AddWeightSuccess, props<{ data: true }>());
const addWeightFailed = createAction(PetDetailsActions.AddWeightFailed, props<{ error: CommonErrorResponse }>());

const petDetailsActions = {
  fetch,
  fetchSuccess,
  fetchFailed,
  addWeight,
  addWeightSuccess,
  addWeightFailed,
};

export default petDetailsActions;
