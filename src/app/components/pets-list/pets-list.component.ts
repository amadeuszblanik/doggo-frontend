import { Component, Input } from '@angular/core';
import { PetsSingleApiResponse } from '../../apiResponse/pets-single.api-response';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss'],
})
export class PetsListComponent {
  @Input() dataSource: PetsSingleApiResponse[] = [];

  displayedColumns: string[] = ['id', 'name', 'kind', 'breed', 'microchip', 'birthDate', 'controls'];
}
