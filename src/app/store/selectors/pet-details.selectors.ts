import { AppState } from '../index';
import { PetDetailsState } from '../reducers/pet-details.reducer';
import { createSelector } from '@ngrx/store';

const selectPetDetails = ({ petDetails }: AppState): PetDetailsState => petDetails;

export const getPetDetailsData = createSelector(selectPetDetails, ({ data }) => data);
export const getPetDetailsApiState = createSelector(selectPetDetails, ({ apiState }) => apiState);
export const getPetDetailsError = createSelector(selectPetDetails, ({ error }) => error);
export const getPetDetailsWeight = createSelector(selectPetDetails, ({ data }) => data?.weight || null);
export const getPetDetailsId = createSelector(selectPetDetails, ({ data }) => data?.id || null);

export const getPetDetailsAddWeightError = createSelector(selectPetDetails, ({ addWeightError }) => addWeightError);
export const getPetDetailsAddWeightApiState = createSelector(selectPetDetails, ({ addWeightApiState }) => addWeightApiState);
