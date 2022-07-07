import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SignUpEffects } from './sign-up.effects';

describe('SignUpEffects', () => {
  let actions$: Observable<any>;
  let effects: SignUpEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SignUpEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SignUpEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
