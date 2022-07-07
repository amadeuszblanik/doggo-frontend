import { createReducer, on } from '@ngrx/store';
import { ApiState } from '../../types/apiState.type';
import petDetailsActions from '../actions/pet-details.actions';
import { CommonErrorResponse } from '../../types/common-error-response.type';
import { PetsSingleApiResponse } from '../../apiResponse/pets-single.api-response';

export interface PetDetailsState {
  data: PetsSingleApiResponse | null;
  error: CommonErrorResponse | null;
  apiState: ApiState;
  addWeightData: true | null;
  addWeightError: CommonErrorResponse | null;
  addWeightApiState: ApiState;
}

export const initialState: PetDetailsState = {
  data: null,
  error: null,
  apiState: ApiState.Init,
  addWeightData: null,
  addWeightError: null,
  addWeightApiState: ApiState.Init,
};

export const petDetailsReducer = createReducer(
  initialState,
  on(petDetailsActions.fetch, (state) => ({ ...state, data: null, apiState: ApiState.Pending })),
  on(petDetailsActions.fetchSuccess, (state, { data }) => ({ ...state, data, apiState: ApiState.Success })),
  on(petDetailsActions.fetchFailed, (state, { error }) => ({ ...state, error, apiState: ApiState.Failed })),
  on(petDetailsActions.addWeight, (state) => ({ ...state, addWeightData: null, addWeightApiState: ApiState.Pending })),
  on(petDetailsActions.addWeightSuccess, (state) => ({ ...state, addWeightData: true, addWeightApiState: ApiState.Success })),
  on(petDetailsActions.addWeightFailed, (state, { error }) => ({ ...state, addWeightError: error, addWeightApiState: ApiState.Failed })),
);
