import { ApiState } from '../../types/api-state.type';
import petsActions from './pets.action';
import { createReducer, on } from '@ngrx/store';
import { CommonErrorApiResponse } from '../../api-responses/common-error.api-response';
import { PetsMyApiResponse } from '../../api-responses/pets-my.api-response';

export interface PetsState {
  petsState: ApiState;
  pets: PetsMyApiResponse[] | null;
  petsError: CommonErrorApiResponse | null;
}

const initialState: PetsState = {
  petsState: ApiState.Init,
  pets: null,
  petsError: null,
};

export const petsReducer = createReducer(
  initialState,
  on(petsActions.fetch, (state) => ({ ...state, petsState: ApiState.Pending })),
  on(petsActions.fetchSuccess, (state, { data }) => ({ ...state, petsState: ApiState.Success, pets: data, petsError: null })),
  on(petsActions.fetchFailure, (state, { error }) => ({ ...state, petsState: ApiState.Failure, pets: null, petsError: error })),
);
