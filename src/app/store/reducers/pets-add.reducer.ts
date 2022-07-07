import { createReducer, on } from '@ngrx/store';
import { ApiState } from '../../types/apiState.type';
import petsAddActions from '../actions/pets-add.actions';
import { CommonErrorResponse } from '../../types/common-error-response.type';
import { PetsSingleApiResponse } from '../../apiResponse/pets-single.api-response';

export interface PetsAddState {
  data: PetsSingleApiResponse | null;
  error: CommonErrorResponse | null;
  apiState: ApiState;
}

export const initialState: PetsAddState = {
  data: null,
  error: null,
  apiState: ApiState.Init,
};

export const petsAddReducer = createReducer(
  initialState,
  on(petsAddActions.fetch, (state) => ({ ...state, data: null, apiState: ApiState.Pending })),
  on(petsAddActions.fetchSuccess, (state, { data }) => ({ ...state, data, apiState: ApiState.Success })),
  on(petsAddActions.fetchFailed, (state, { error }) => ({ ...state, error, apiState: ApiState.Failed })),
  on(petsAddActions.reset, () => initialState),
);
