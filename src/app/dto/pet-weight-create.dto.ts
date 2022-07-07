import { WeightUnits } from '../types/weight-units.type';

export interface PetWeightCreateDto {
  weight?: number | null;
  unit?: WeightUnits | null;
  date?: Date | null;
}
