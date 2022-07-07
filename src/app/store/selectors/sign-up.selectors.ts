import { AppState } from '../index';
import { SignUpState } from '../reducers/sign-up.reducer';
import { createSelector } from '@ngrx/store';

const selectSignUp = ({ signUp }: AppState): SignUpState => signUp;

export const getSignUpData = createSelector(selectSignUp, ({ data }) => data);
export const getSignUpApiState = createSelector(selectSignUp, ({ apiState }) => apiState);
