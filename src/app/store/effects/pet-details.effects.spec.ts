import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PetDetailsEffects } from './pet-details.effects';

describe('PetDetailsEffects', () => {
  let actions$: Observable<any>;
  let effects: PetDetailsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PetDetailsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PetDetailsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
