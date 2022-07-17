import { Component, OnInit } from '@angular/core';
import { AUTH_LOCAL_STORAGE_KEY } from '../../../store/auth/auth.reducer';

@Component({
  selector: 'app-auth-sign-off-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class AuthSignOffPageComponent implements OnInit {
  ngOnInit(): void {
    localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
  }
}
