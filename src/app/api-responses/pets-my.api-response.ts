import { PetKind } from '../types/pet-kind.type';
import { Breed } from '../types/breed.type';

export interface PetsMyApiResponse {
  id: number;
  name: string;
  kind: PetKind;
  breed: Breed;
  microchip: string;
  birthDate: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
