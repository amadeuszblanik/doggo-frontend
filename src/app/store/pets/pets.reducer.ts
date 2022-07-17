import { ApiState } from '../../types/api-state.type';
import petsActions from './pets.action';
import { createReducer, on } from '@ngrx/store';
import { CommonErrorApiResponse } from '../../api-responses/common-error.api-response';
import { PetsMyApiResponse } from '../../api-responses/pets-my.api-response';

export interface PetsState {
  petsState: ApiState;
  pets: PetsMyApiResponse[] | null;
  petsError: CommonErrorApiResponse | null;

  addState: ApiState;
  add: PetsMyApiResponse | null;
  addError: CommonErrorApiResponse | null;
}

const initialState: PetsState = {
  petsState: ApiState.Init,
  pets: null,
  petsError: null,

  addState: ApiState.Init,
  add: null,
  addError: null,
};

export const petsReducer = createReducer(
  initialState,
  on(petsActions.fetch, (state) => ({ ...state, petsState: ApiState.Pending })),
  on(petsActions.fetchSuccess, (state, { data }) => ({ ...state, petsState: ApiState.Success, pets: data, petsError: null })),
  on(petsActions.fetchFailure, (state, { error }) => ({ ...state, petsState: ApiState.Failure, pets: null, petsError: error })),
  on(petsActions.add, (state) => ({ ...state, addState: ApiState.Pending })),
  on(petsActions.addReset, (state) => ({ ...state, addState: ApiState.Init, add: null, addError: null })),
  on(petsActions.addSuccess, (state, { data }) => ({ ...state, addState: ApiState.Success, add: data, addError: null })),
  on(petsActions.addFailure, (state, { error }) => ({ ...state, addState: ApiState.Failure, add: null, addError: error })),
);
