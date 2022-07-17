import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import authActions from '../../../store/auth/auth.action';
import { getAuthSignInError, getAuthSignInState } from '../../../store/auth/auth.selector';
import { ApiState } from '../../../types/api-state.type';
import { MatSnackBar } from '@angular/material/snack-bar';
import { combineLatest, filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-auth-sign-in-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class AuthSignInPageComponent implements OnInit, OnDestroy {
  formGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  apiState = ApiState;

  ngDestroy$ = new Subject<void>();
  authSignInState$ = this.store.select(getAuthSignInState);
  authSignInError$ = this.store.select(getAuthSignInError);

  constructor(private store: Store<AppState>, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.store.dispatch(authActions.signInReset());

    combineLatest([this.authSignInState$, this.authSignInError$])
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
    const { username, password } = this.formGroup.value;

    if (!username || !password) {
      return;
    }

    this.store.dispatch(authActions.signIn({ username, password }));
  }
}
