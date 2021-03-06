import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NavigationLinksType } from '../../../types/navigation-links.type';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { getAuthIsAuthenticated } from '../../../store/auth/auth.selector';

const MOCKED_SIGNED_OFF = [
  {
    name: 'Home',
    icon: 'home',
    url: '/',
  },
  { name: 'Sign in', icon: 'login', url: '/auth/sign-in' },
  { name: 'Sign up', icon: 'app_registration', url: '/auth/sign-up' },
  { name: 'Password reset', icon: 'lock_open', url: '/auth/password-reset' },
  { name: 'E-mail verification', icon: 'how_to_reg', url: '/auth/email-verification' },
];

const MOCKED_SIGNED_IN = [
  { name: 'Pets', icon: 'pets', url: '/pets' },
  { name: 'Profile', icon: 'account_circle', url: '/profile' },
  { name: 'Sign off', icon: 'logout', url: '/auth/sign-off' },
];

const SHARED_LINKS = [
  {
    name: 'API (Swagger)',
    icon: 'api',
    url: 'https://doggo.rocks/api/',
  },
  {
    name: 'GitHub',
    icon: 'numbers',
    url: 'https://github.com/amadeuszblanik?tab=repositories&q=doggo&type=&language=&sort=',
  },
];

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  navigationLinks$: Observable<NavigationLinksType[]>;

  constructor(private store: Store<AppState>) {
    this.navigationLinks$ = this.store
      .select(getAuthIsAuthenticated)
      .pipe(map((isSignedIn) => (isSignedIn ? [...MOCKED_SIGNED_IN, ...SHARED_LINKS] : [...MOCKED_SIGNED_OFF, ...SHARED_LINKS])));
  }
}
