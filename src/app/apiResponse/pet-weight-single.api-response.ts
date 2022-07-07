import { WeightUnits } from '../types/weight-units.type';

export interface PetWeightSingleApiResponse {
  id: number;
  weight: number;
  unit: WeightUnits;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}
