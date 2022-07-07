import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import petDetailsActions from '../../store/actions/pet-details.actions';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
})
export class PetDetailsComponent implements OnInit, OnDestroy {
  ngDestroy$ = new Subject<void>();

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(takeUntil(this.ngDestroy$)).subscribe((params) => {
      this.store.dispatch(petDetailsActions.fetch({ id: String(params['id']) }));
    });
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }
}
