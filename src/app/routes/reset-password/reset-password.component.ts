import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import PasswordValidator from '../../formValidators/passwordValidator';
import { ErrorStateMatcher } from '@angular/material/core';
import authActions from '../../store/actions/auth.actions';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthResetPasswordDto } from '../../dto/auth-reset-password.dto';
import CustomValidators from '../../formValidators/customValidators';
import { getAuthPasswordResetErrorMessage, getAuthPasswordResetState } from '../../store/selectors/auth.selectors';
import { ApiState } from '../../types/apiState.type';

export class PasswordConfirmErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;

    return !!(control && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent {
  apiState = ApiState;

  formGroup = new FormGroup(
    {
      token: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, PasswordValidator]),
      passwordConfirm: new FormControl('', [Validators.required]),
    },
    CustomValidators.MatchValidator('password', 'passwordConfirm', 'passwordConfirmMismatch'),
  );
  passwordConfirmErrorMatcher = new PasswordConfirmErrorStateMatcher();

  // Redux data
  authPasswordResetErrorMessage = this.store.select(getAuthPasswordResetErrorMessage);
  authPasswordResetState$ = this.store.select(getAuthPasswordResetState);

  constructor(activatedRoute: ActivatedRoute, private store: Store<AppState>, private snackBar: MatSnackBar) {
    activatedRoute.queryParams.subscribe((params) => {
      const token = params['token'] ? String(params['token']) : null;

      if (!token) {
        return;
      }

      this.formGroup.controls.token.setValue(token);
    });
  }

  handleSubmit(): void {
    const token = this.formGroup.value.token;
    const password = this.formGroup.value.password;
    const passwordConfirm = this.formGroup.value.passwordConfirm;

    if (this.formGroup.invalid || !(token && password && passwordConfirm)) {
      this.snackBar.open('Cannot create a request', 'Close');

      return;
    }

    const body: AuthResetPasswordDto = {
      password,
      passwordConfirm,
    };

    this.store.dispatch(authActions.resetPasswordStart({ token, body }));
  }
}
