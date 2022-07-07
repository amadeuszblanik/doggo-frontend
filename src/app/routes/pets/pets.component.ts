import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import petsActions from '../../store/actions/pets.actions';
import { Observable } from 'rxjs';
import { PetsSingleApiResponse } from '../../apiResponse/pets-single.api-response';
import { getPetsData } from '../../store/selectors/pets.selectors';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
})
export class PetsComponent implements OnInit {
  // Redux data
  petsData$: Observable<PetsSingleApiResponse[] | null>;

  // Live cycle
  constructor(private store: Store<AppState>) {
    this.petsData$ = this.store.select(getPetsData);
  }

  ngOnInit(): void {
    this.store.dispatch(petsActions.fetch());
  }
}
