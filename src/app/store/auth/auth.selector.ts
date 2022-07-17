import { AppState } from '../index';
import { createSelector } from '@ngrx/store';

const selectAuth = (state: AppState) => state.auth;

export const getAuthIsAuthenticated = createSelector(selectAuth, ({ accessToken }) => Boolean(accessToken));
export const getAuthAccessToken = createSelector(selectAuth, ({ accessToken }) => accessToken);

export const getAuthSignInState = createSelector(selectAuth, ({ signInState }) => signInState);
export const getAuthSignInError = createSelector(selectAuth, ({ signInError }) => signInError);

export const getAuthSignUpState = createSelector(selectAuth, ({ signUpState }) => signUpState);
export const getAuthSignUpResponse = createSelector(selectAuth, ({ signUpResponse }) => signUpResponse);
export const getAuthSignUpMessage = createSelector(selectAuth, ({ signUpResponse }) => signUpResponse?.message || null);
export const getAuthSignUpError = createSelector(selectAuth, ({ signUpError }) => signUpError);
