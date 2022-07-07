import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeightUnits } from '../../types/weight-units.type';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '../../utils';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import petDetailsActions from '../../store/actions/pet-details.actions';
import { combineLatest, filter, first, Observable, Subject } from 'rxjs';
import { getPetDetailsAddWeightApiState, getPetDetailsAddWeightError, getPetDetailsId } from '../../store/selectors/pet-details.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonErrorResponse } from '../../types/common-error-response.type';
import { ApiState } from '../../types/apiState.type';
import { PetWeightCreateDto } from '../../dto/pet-weight-create.dto';
import { TODAY } from '../../globals/general';

@Component({
  selector: 'app-pet-weight-add',
  templateUrl: './pet-weight-add.component.html',
  styleUrls: ['./pet-weight-add.component.scss'],
})
export class PetWeightAddComponent implements OnInit, OnDestroy {
  formGroup = new FormGroup({
    weight: new FormControl<number | null>(null, [Validators.required]),
    unit: new FormControl(WeightUnits.Kilogram, [Validators.required]),
    date: new FormControl(formatDate(TODAY), [Validators.required]),
    time: new FormControl(`${TODAY.getHours()}:${TODAY.getMinutes()}`, [Validators.required]),
  });

  weightUnits = Object.values(WeightUnits);

  ngUnsubscribe$ = new Subject<void>();

  // Redux data
  petDetailsId$: Observable<string | null>;
  petDetailsAddWeightError$: Observable<CommonErrorResponse | null>;
  petDetailsAddWeightApiState$: Observable<ApiState>;

  constructor(private store: Store<AppState>, private snackBar: MatSnackBar) {
    this.petDetailsId$ = this.store.select(getPetDetailsId);
    this.petDetailsAddWeightError$ = this.store.select(getPetDetailsAddWeightError);
    this.petDetailsAddWeightApiState$ = this.store.select(getPetDetailsAddWeightApiState);
  }

  // Live cycle
  ngOnInit() {
    combineLatest([this.petDetailsAddWeightApiState$, this.petDetailsAddWeightError$])
      .pipe(filter(([petDetailsAddWeightApiState]) => petDetailsAddWeightApiState === ApiState.Failed))
      .subscribe(([_petDetailsAddWeightApiState, petDetailsAddWeightError]) => {
        this.snackBar.open(petDetailsAddWeightError?.message || 'Unknown error', 'Close', { duration: 3000 });
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  // Handlers
  handleSubmit() {
    if (this.formGroup.invalid) {
      return;
    }

    this.petDetailsId$.pipe(first()).subscribe((id) => {
      if (typeof id !== 'string') {
        this.snackBar.open('Pet not found', 'OK', { duration: 3000 });

        return;
      }

      const body: PetWeightCreateDto = {
        weight: this.formGroup.value.weight,
        unit: this.formGroup.value.unit,
        date: new Date(`${String(this.formGroup.value.date)} ${String(this.formGroup.value.time)}`),
      };

      this.store.dispatch(petDetailsActions.addWeight({ id, body }));
    });
  }
}
