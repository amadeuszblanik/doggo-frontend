import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { getPetDetailsWeight } from '../../store/selectors/pet-details.selectors';
import { Observable } from 'rxjs';
import { PetWeightSingleApiResponse } from '../../apiResponse/pet-weight-single.api-response';

@Component({
  selector: 'app-pet-weight',
  templateUrl: './pet-weight.component.html',
})
export class PetWeightComponent {
  petDetailsWeight$: Observable<PetWeightSingleApiResponse[] | null>;

  constructor(store: Store<AppState>) {
    this.petDetailsWeight$ = store.select(getPetDetailsWeight);
  }
}
