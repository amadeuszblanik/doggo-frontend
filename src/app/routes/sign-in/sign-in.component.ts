import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import signInActions from '../../store/actions/sign-in.actions';
import { combineLatest, filter, Observable } from 'rxjs';
import { SignInApiResponse } from '../../apiResponse/sign-in.api-response';
import { CommonErrorResponse } from '../../types/common-error-response.type';
import { ApiState } from '../../types/apiState.type';
import { getSignInApiState, getSignInData } from '../../store/selectors/sign-in.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {
  formGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  // Redux data
  private signInData$: Observable<SignInApiResponse | CommonErrorResponse | null>;
  private signInApiStatus$: Observable<ApiState>;

  constructor(private store: Store<AppState>, private snackBar: MatSnackBar, private router: Router) {
    this.signInData$ = store.select(getSignInData);
    this.signInApiStatus$ = store.select(getSignInApiState);
  }

  ngOnInit(): void {
    combineLatest([this.signInApiStatus$, this.signInData$])
      .pipe(filter(([signInApiStatus]) => [ApiState.Success, ApiState.Failed].includes(signInApiStatus)))
      .subscribe(([signInApiStatus, signInData]) => {
        switch (signInApiStatus) {
          case ApiState.Failed:
            const message = signInData && 'message' in signInData ? signInData.message : 'Unknown error';

            this.snackBar.open(Array.isArray(message) ? message.join(', ') : message, 'Close');

            break;
          case ApiState.Success:
            void this.router.navigate(['/']); // @TODO
            break;
        }
      });
  }

  handleSubmit(): void {
    this.store.dispatch(signInActions.fetch(this.formGroup.value));
  }
}
