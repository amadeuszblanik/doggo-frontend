import { WeightUnits } from '../types/weight-units.type';

export interface AuthSignUpDto {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirm: string;
  weightUnit?: WeightUnits;
}
