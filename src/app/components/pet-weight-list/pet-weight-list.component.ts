import { Component, Input } from '@angular/core';
import { PetWeightSingleApiResponse } from '../../apiResponse/pet-weight-single.api-response';

@Component({
  selector: 'app-pet-weight-list',
  templateUrl: './pet-weight-list.component.html',
  styleUrls: ['./pet-weight-list.component.scss'],
})
export class PetWeightListComponent {
  @Input() dataSource: PetWeightSingleApiResponse[] = [];

  displayedColumns: string[] = ['id', 'weight', 'date', 'controls'];
}
