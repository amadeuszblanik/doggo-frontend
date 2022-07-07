import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import PasswordValidator from '../../formValidators/passwordValidator';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import signUpActions from '../../store/actions/sign-up.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { combineLatest, filter, Observable } from 'rxjs';
import { MessageApiResponse } from '../../apiResponse/message.api-response';
import { CommonErrorResponse } from '../../types/common-error-response.type';
import { ApiState } from '../../types/apiState.type';
import { getSignUpApiState, getSignUpData } from '../../store/selectors/sign-up.selectors';
import { Router } from '@angular/router';
import CustomValidators from 'src/app/formValidators/customValidators';
import { ErrorStateMatcher } from '@angular/material/core';

export class PasswordConfirmErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;

    return !!(control && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit {
  apiState = ApiState;

  formGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, PasswordValidator]),
      passwordConfirm: new FormControl('', [Validators.required]),
    },
    CustomValidators.MatchValidator('password', 'passwordConfirm', 'passwordConfirmMismatch'),
  );
  passwordConfirmErrorMatcher = new PasswordConfirmErrorStateMatcher();

  // Redux data
  signUpData$: Observable<MessageApiResponse | CommonErrorResponse | null>;
  signUpApiStatus$: Observable<ApiState>;

  constructor(private store: Store<AppState>, private snackBar: MatSnackBar, private router: Router) {
    this.signUpData$ = store.select(getSignUpData);
    this.signUpApiStatus$ = store.select(getSignUpApiState);
  }

  // Live cycle
  ngOnInit(): void {
    combineLatest([this.signUpApiStatus$, this.signUpData$])
      .pipe(filter(([signUpApiStatus]) => [ApiState.Success, ApiState.Failed].includes(signUpApiStatus)))
      .subscribe(([signUpApiStatus, signUpData]) => {
        switch (signUpApiStatus) {
          case ApiState.Failed:
            const message = signUpData?.message || 'Unknown error';

            this.snackBar.open(Array.isArray(message) ? message.join(', ') : message, 'Close');

            break;
          case ApiState.Success:
            break;
        }
      });
  }

  // Action handlers
  handleSubmit(): void {
    if (this.formGroup.invalid) {
      return;
    }

    this.store.dispatch(signUpActions.fetch(this.formGroup.value));
  }
}
