import { AppState } from '../index';
import { PetsState } from '../reducers/pets.reducer';
import { createSelector } from '@ngrx/store';

const selectPets = ({ pets }: AppState): PetsState => pets;

export const getPetsData = createSelector(selectPets, ({ data }) => data);
export const getPetsApiState = createSelector(selectPets, ({ apiState }) => apiState);
export const getPetsError = createSelector(selectPets, ({ error }) => error);
