import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PetsEffects } from './pets.effects';

describe('PetsEffects', () => {
  let actions$: Observable<any>;
  let effects: PetsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PetsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PetsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
