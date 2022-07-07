import { PetKind } from '../types/pet-kind.type';

export interface PetCreateDto {
  name?: string | null;
  kind?: PetKind | null;
  breed?: string | null;
  microchip?: string | null;
  birthDate?: Date | null;
}
