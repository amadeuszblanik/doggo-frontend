import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavigationLinksType } from '../../types/navigation-links.type';

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
  {
    name: 'Home',
    icon: 'home',
    url: '/',
  },
  { name: 'Pets', icon: 'pets', url: '/pets' },
  { name: 'Profile', icon: 'account_circle', url: '/profile' },
  { name: 'Sign off', icon: 'logout', url: '/auth/sign-up' },
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
  navigationLinks$ = new BehaviorSubject<NavigationLinksType[]>([...MOCKED_SIGNED_OFF, ...SHARED_LINKS]);
  isSignedIn$ = new BehaviorSubject<boolean>(false);

  changeNavigationLinks(isSignedIn: boolean) {
    this.isSignedIn$.next(isSignedIn);
    this.navigationLinks$.next(isSignedIn ? [...MOCKED_SIGNED_IN, ...SHARED_LINKS] : [...MOCKED_SIGNED_OFF, ...SHARED_LINKS]);
  }
}
