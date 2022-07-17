import { createAction, props } from '@ngrx/store';
import { CommonErrorApiResponse } from '../../api-responses/common-error.api-response';
import { PublicConfigApiResponse } from '../../api-responses/public-config.api-response';

export enum ConfigActions {
  Fetch = '[Config] Fetch',
  FetchSuccess = '[Config] Fetch success',
  FetchFailure = '[Config] Fetch failure',
}

const fetch = createAction(ConfigActions.Fetch);
const fetchSuccess = createAction(ConfigActions.FetchSuccess, props<{ data: PublicConfigApiResponse }>());
const fetchFailure = createAction(ConfigActions.FetchFailure, props<{ error: CommonErrorApiResponse }>());

const configActions = {
  fetch,
  fetchSuccess,
  fetchFailure,
};

export default configActions;
