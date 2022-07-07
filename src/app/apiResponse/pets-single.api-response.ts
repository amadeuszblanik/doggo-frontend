import { PetKind } from '../types/pet-kind.type';
import { PetsRoles } from '../types/pets-roles.type';
import { PetWeightSingleApiResponse } from './pet-weight-single.api-response';

export interface PetsSingleApiResponse {
  id: string;
  name: string;
  kind: PetKind;
  breed: string;
  microchip: string;
  birthDate: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  petUsers: {
    role: PetsRoles;
    user: {
      email: string;
      firstName: string;
      lastName: string;
    };
  }[];
  weight: PetWeightSingleApiResponse[];
}
