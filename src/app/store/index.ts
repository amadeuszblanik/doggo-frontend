import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { signUpReducer, SignUpState } from './reducers/sign-up.reducer';
import { signInReducer, SignInState } from './reducers/sign-in.reducer';
import { petsReducer, PetsState } from './reducers/pets.reducer';
import { petsAddReducer, PetsAddState } from './reducers/pets-add.reducer';
import { petDetailsReducer, PetDetailsState } from './reducers/pet-details.reducer';
import { authReducer, AuthState } from './reducers/auth.reducer';

export interface AppState {
  auth: AuthState;
  signUp: SignUpState;
  signIn: SignInState;
  pets: PetsState;
  petsAdd: PetsAddState;
  petDetails: PetDetailsState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  signUp: signUpReducer,
  signIn: signInReducer,
  pets: petsReducer,
  petsAdd: petsAddReducer,
  petDetails: petDetailsReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
