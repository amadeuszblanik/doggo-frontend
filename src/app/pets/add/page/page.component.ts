import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiState } from '../../../types/api-state.type';
import { combineLatest, filter, map, Observable, Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PetKind } from '../../../types/pet-kind.type';
import { getConfigBreeds } from '../../../store/config/config.selector';
import { Breed } from 'src/app/types/breed.type';
import petsActions from '../../../store/pets/pets.action';
import { getPetsAddError, getPetsAddState } from '../../../store/pets/pets.selector';

@Component({
  selector: 'app-pets-add-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PetsAddPageComponent implements OnInit, OnDestroy {
  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    kind: new FormControl<PetKind | null>(null, [Validators.required]),
    breed: new FormControl<number | null>(null, [Validators.required]),
    microchip: new FormControl(''),
    birthDate: new FormControl<Date>(new Date(), [Validators.required]),
  });

  petKinds = Object.entries(PetKind);
  breeds$ = this.store.select(getConfigBreeds);

  filteredOptions$: Observable<Breed[]>;

  apiState = ApiState;

  ngDestroy$ = new Subject<void>();
  petsAddState$ = this.store.select(getPetsAddState);
  petsAddError$ = this.store.select(getPetsAddError);

  constructor(private store: Store<AppState>, private snackBar: MatSnackBar) {
    this.filteredOptions$ = combineLatest([this.formGroup.controls.breed.valueChanges, this.breeds$]).pipe(
      map(([value, breeds]) => breeds.filter((breed) => breed.name.toLowerCase().includes(String(value).toLowerCase()))),
    );
  }

  ngOnInit(): void {
    this.store.dispatch(petsActions.addReset());

    combineLatest([this.petsAddState$, this.petsAddError$])
      .pipe(
        takeUntil(this.ngDestroy$),
        filter(([apiState]) => apiState === ApiState.Failure),
      )
      .subscribe(([_, error]) => {
        this.snackBar.open(error?.message || 'Unable to sign in', 'Close');
      });
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }

  displayFn(breed: Breed): string {
    return breed && breed.name ? breed.name : '';
  }

  submitForm(): void {
    const { name, kind, breed, microchip, birthDate } = this.formGroup.value;

    if (!name || !kind || !birthDate) {
      this.snackBar.open('Please fill all required fields', 'Close');

      return;
    }

    this.store.dispatch(petsActions.add({ data: { name, kind, breed, microchip, birthDate } }));
  }
}
