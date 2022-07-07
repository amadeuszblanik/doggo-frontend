import { AppState } from '../index';
import { PetsAddState } from '../reducers/pets-add.reducer';
import { createSelector } from '@ngrx/store';

const selectPets = ({ petsAdd }: AppState): PetsAddState => petsAdd;

export const getPetsAddData = createSelector(selectPets, ({ data }) => data);
export const getPetsAddApiState = createSelector(selectPets, ({ apiState }) => apiState);
export const getPetsAddName = createSelector(selectPets, getPetsAddData, (_, data) => data?.name || null);
export const getPetsError = createSelector(selectPets, ({ error }) => error);
