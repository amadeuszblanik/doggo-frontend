import { AppState } from '../index';
import { createSelector } from '@ngrx/store';
import { PetsMyApiResponse } from '../../api-responses/pets-my.api-response';

const selectPets = (state: AppState) => state.pets;

export const getPets = createSelector(selectPets, ({ pets }): PetsMyApiResponse[] => pets || []);
export const getPetsState = createSelector(selectPets, ({ petsState }) => petsState);
export const getPetsError = createSelector(selectPets, ({ petsError }) => petsError);
export const getPetsErrorMessage = createSelector(selectPets, ({ petsError }) => petsError?.message || 'Failed to load.');
