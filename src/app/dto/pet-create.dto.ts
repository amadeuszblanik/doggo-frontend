import { PetKind } from '../types/pet-kind.type';

export interface PetCreateDto {
  name: string;
  kind: PetKind;
  breed?: number | null;
  microchip?: string | null;
  birthDate: Date;
}
