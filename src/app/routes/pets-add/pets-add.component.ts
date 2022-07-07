import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PetKind } from '../../types/pet-kind.type';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import petsAddActions from '../../store/actions/pets-add.actions';
import { filter, Observable } from 'rxjs';
import { ApiState } from '../../types/apiState.type';
import { getPetsAddApiState, getPetsAddName, getPetsError } from '../../store/selectors/pets-add.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonErrorResponse } from '../../types/common-error-response.type';

@Component({
  selector: 'app-pets-add',
  templateUrl: './pets-add.component.html',
})
export class PetsAddComponent implements OnInit {
  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    kind: new FormControl<PetKind | null>(null, [Validators.required]),
    breed: new FormControl(null, [Validators.required]),
    microchip: new FormControl(''),
    birthDate: new FormControl<Date | null>(null, [Validators.required]),
  });
  petKinds = Object.values(PetKind);
  apiState = ApiState;

  // Redux data
  petsAddPetName$: Observable<string | null>;
  petsAddApiStatus$: Observable<ApiState>;
  petsAddError$: Observable<CommonErrorResponse | null>;

  constructor(private store: Store<AppState>, private snackBar: MatSnackBar) {
    this.petsAddPetName$ = this.store.select(getPetsAddName);
    this.petsAddApiStatus$ = this.store.select(getPetsAddApiState);
    this.petsAddError$ = this.store.select(getPetsError);
  }

  ngOnInit(): void {
    this.store.dispatch(petsAddActions.reset());

    this.petsAddError$.pipe(filter(Boolean)).subscribe((error) => {
      this.snackBar.open(error.message, 'Close');
    });
  }

  handleSubmit(): void {
    this.store.dispatch(petsAddActions.fetch({ body: this.formGroup.value }));
  }
}
