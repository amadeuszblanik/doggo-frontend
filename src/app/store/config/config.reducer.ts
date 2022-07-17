import { ApiState } from '../../types/api-state.type';
import configActions from './config.action';
import { createReducer, on } from '@ngrx/store';
import { CommonErrorApiResponse } from '../../api-responses/common-error.api-response';
import { PublicConfigApiResponse } from '../../api-responses/public-config.api-response';

export interface ConfigState {
  publicState: ApiState;
  publicData: PublicConfigApiResponse | null;
  publicError: CommonErrorApiResponse | null;
}

const initialState: ConfigState = {
  publicState: ApiState.Init,
  publicData: null,
  publicError: null,
};

export const configReducer = createReducer(
  initialState,
  on(configActions.fetch, (state) => ({ ...state, publicState: ApiState.Pending })),
  on(configActions.fetchSuccess, (state, { data }) => ({ ...state, publicState: ApiState.Success, publicData: data, publicError: null })),
  on(configActions.fetchFailure, (state, { error }) => ({ ...state, publicState: ApiState.Failure, publicData: null, publicError: error })),
);
