import { AppState } from '../index';
import { createSelector } from '@ngrx/store';

const selectAuth = (state: AppState) => state.auth;

export const getAuthIsAuthenticated = createSelector(selectAuth, ({ accessToken }) => Boolean(accessToken));

export const getAuthSignInState = createSelector(selectAuth, ({ signInState }) => signInState);
export const getAuthSignInError = createSelector(selectAuth, ({ signInError }) => signInError);
