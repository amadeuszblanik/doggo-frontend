import { createReducer, on } from '@ngrx/store';
import { ApiState } from '../../types/apiState.type';
import petsActions from '../actions/pets.actions';
import { CommonErrorResponse } from '../../types/common-error-response.type';
import { PetsSingleApiResponse } from '../../apiResponse/pets-single.api-response';

export interface PetsState {
  data: PetsSingleApiResponse[] | null;
  error: CommonErrorResponse | null;
  apiState: ApiState;
}

export const initialState: PetsState = {
  data: null,
  error: null,
  apiState: ApiState.Init,
};

export const petsReducer = createReducer(
  initialState,
  on(petsActions.fetch, (state) => ({ ...state, data: null, apiState: ApiState.Pending })),
  on(petsActions.fetchSuccess, (state, { data }) => ({ ...state, data, apiState: ApiState.Success })),
  on(petsActions.fetchFailed, (state, { error }) => ({ ...state, error, apiState: ApiState.Failed })),
);
