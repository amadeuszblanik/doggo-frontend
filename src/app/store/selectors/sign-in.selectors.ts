import { AppState } from '../index';
import { SignInState } from '../reducers/sign-in.reducer';
import { createSelector } from '@ngrx/store';

const selectSignIn = ({ signIn }: AppState): SignInState => signIn;

export const getSignInData = createSelector(selectSignIn, ({ data }) => data);
export const getSignInApiState = createSelector(selectSignIn, ({ apiState }) => apiState);
