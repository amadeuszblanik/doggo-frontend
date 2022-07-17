import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiState } from '../../../types/api-state.type';
import { combineLatest, filter, Subject, takeUntil } from 'rxjs';
import { getAuthSignUpError, getAuthSignUpMessage, getAuthSignUpState } from '../../../store/auth/auth.selector';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { MatSnackBar } from '@angular/material/snack-bar';
import authActions from '../../../store/auth/auth.action';
import { WeightUnits } from '../../../types/weight-units.type';

@Component({
  selector: 'app-auth-sign-up-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class AuthSignUpPageComponent implements OnInit, OnDestroy {
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    passwordConfirm: new FormControl('', [Validators.required]),
    weightUnit: new FormControl<WeightUnits>(WeightUnits.Kilogram, [Validators.required]),
  });

  weightUnits = Object.entries(WeightUnits);

  apiState = ApiState;

  ngDestroy$ = new Subject<void>();
  authSignUpState$ = this.store.select(getAuthSignUpState);
  authSignUpMessage$ = this.store.select(getAuthSignUpMessage);
  authSignUpError$ = this.store.select(getAuthSignUpError);

  constructor(private store: Store<AppState>, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    combineLatest([this.authSignUpState$, this.authSignUpError$])
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

  submitForm(): void {
    const { email, firstName, lastName, password, passwordConfirm, weightUnit } = this.formGroup.value;

    if (!email || !firstName || !lastName || !password || !passwordConfirm || !weightUnit) {
      this.snackBar.open('Please fill in all fields', 'Close');

      return;
    }

    this.store.dispatch(authActions.signUp({ email, firstName, lastName, password, passwordConfirm, weightUnit }));
  }
}
