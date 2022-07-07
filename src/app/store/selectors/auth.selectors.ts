import { AppState } from '../index';
import { createSelector } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';

const selectAuth = ({ auth }: AppState): AuthState => auth;

export const getAuthRequestPasswordResetData = createSelector(
  selectAuth,
  ({ requestResetPasswordRequestData }) => requestResetPasswordRequestData,
);
export const getAuthRequestPasswordResetDataMessage = createSelector(selectAuth, getAuthRequestPasswordResetData, (_, data) =>
  data ? data.message : null,
);
export const getAuthRequestPasswordResetErrors = createSelector(
  selectAuth,
  ({ requestResetPasswordRequestError }) => requestResetPasswordRequestError,
);
export const getAuthRequestPasswordResetErrorMessage = createSelector(selectAuth, getAuthRequestPasswordResetErrors, (_, error) =>
  error ? error.message : null,
);
export const getAuthRequestPasswordResetState = createSelector(
  selectAuth,
  ({ requestResetPasswordRequestState }) => requestResetPasswordRequestState,
);

export const getAuthPasswordResetErrors = createSelector(selectAuth, ({ resetPasswordRequestError }) => resetPasswordRequestError);
export const getAuthPasswordResetErrorMessage = createSelector(selectAuth, getAuthPasswordResetErrors, (_, error) =>
  error ? error.message : null,
);
export const getAuthPasswordResetState = createSelector(selectAuth, ({ resetPasswordRequestState }) => resetPasswordRequestState);
