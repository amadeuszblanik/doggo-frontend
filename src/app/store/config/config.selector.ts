import { AppState } from '../index';
import { createSelector } from '@ngrx/store';

const selectConfig = (state: AppState) => state.config;

export const getConfigPublic = createSelector(selectConfig, ({ publicData }) => publicData);

export const getConfigBreeds = createSelector(selectConfig, getConfigPublic, (_, publicState) => publicState?.breeds || []);
