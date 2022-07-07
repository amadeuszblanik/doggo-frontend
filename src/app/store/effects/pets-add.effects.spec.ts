import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PetsAddEffects } from './pets-add.effects';

describe('PetsAddEffects', () => {
  let actions$: Observable<any>;
  let effects: PetsAddEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PetsAddEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PetsAddEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
