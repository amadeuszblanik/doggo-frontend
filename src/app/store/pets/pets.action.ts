import { createAction, props } from '@ngrx/store';
import { PetsMyApiResponse } from '../../api-responses/pets-my.api-response';
import { CommonErrorApiResponse } from '../../api-responses/common-error.api-response';
import { PetCreateDto } from '../../dto/pet-create.dto';

export enum PetsActions {
  Fetch = '[Pets] Fetch',
  FetchSuccess = '[Pets] Fetch success',
  FetchFailure = '[Pets] Fetch failure',

  Add = '[Pets] Add',
  AddReset = '[Pets] Add Reset',
  AddSuccess = '[Pets] Add success',
  AddFailure = '[Pets] Add failure',
}

const fetch = createAction(PetsActions.Fetch);
const fetchSuccess = createAction(PetsActions.FetchSuccess, props<{ data: PetsMyApiResponse[] }>());
const fetchFailure = createAction(PetsActions.FetchFailure, props<{ error: CommonErrorApiResponse }>());

const add = createAction(PetsActions.Add, props<{ data: PetCreateDto }>());
const addReset = createAction(PetsActions.AddReset);
const addSuccess = createAction(PetsActions.AddSuccess, props<{ data: PetsMyApiResponse }>());
const addFailure = createAction(PetsActions.AddFailure, props<{ error: CommonErrorApiResponse }>());

const petsActions = {
  fetch,
  fetchSuccess,
  fetchFailure,
  add,
  addReset,
  addSuccess,
  addFailure,
};

export default petsActions;
