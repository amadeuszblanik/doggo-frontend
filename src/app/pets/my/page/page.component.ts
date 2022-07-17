import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { getPets, getPetsErrorMessage, getPetsState } from '../../../store/pets/pets.selector';
import { ApiState } from '../../../types/api-state.type';
import petsActions from '../../../store/pets/pets.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets-my-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PetsMyPageComponent implements OnInit {
  apiState = ApiState;

  petsState$ = this.store.select(getPetsState);
  petsErrorMessage$ = this.store.select(getPetsErrorMessage);
  pets$ = this.store.select(getPets);

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.fetchPets();
  }

  fetchPets(): void {
    this.store.dispatch(petsActions.fetch());
  }

  addNewPet(): void {
    void this.router.navigate(['/pets/add']);
  }
}
