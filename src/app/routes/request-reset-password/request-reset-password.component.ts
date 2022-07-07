import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import authActions from '../../store/actions/auth.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import {
  getAuthRequestPasswordResetDataMessage,
  getAuthRequestPasswordResetErrorMessage,
  getAuthRequestPasswordResetState,
} from '../../store/selectors/auth.selectors';
import { ApiState } from '../../types/apiState.type';

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
})
export class RequestResetPasswordComponent {
  apiState = ApiState;

  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  // Redux data
  authRequestPasswordResetErrorMessage$ = this.store.select(getAuthRequestPasswordResetErrorMessage);
  authRequestPasswordResetDataMessage$ = this.store.select(getAuthRequestPasswordResetDataMessage);
  authRequestPasswordResetState$ = this.store.select(getAuthRequestPasswordResetState);

  constructor(private store: Store<AppState>, private snackBar: MatSnackBar) {}

  handleSubmit(): void {
    const userEmail = this.formGroup.value.email;

    if (this.formGroup.invalid || !userEmail) {
      this.snackBar.open('Cannot create a request', 'Close');

      return;
    }

    this.store.dispatch(authActions.requestResetPasswordStart({ userEmail }));
  }
}
