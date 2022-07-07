import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SignInEffects } from './sign-in.effects';

describe('SignInEffects', () => {
  let actions$: Observable<any>;
  let effects: SignInEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SignInEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SignInEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
