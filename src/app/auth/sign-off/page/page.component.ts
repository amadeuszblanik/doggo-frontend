import { Component, OnInit } from '@angular/core';
import { STORE_LOCAL_STORAGE_KEY } from '../../../store';

@Component({
  selector: 'app-auth-sign-off-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class AuthSignOffPageComponent implements OnInit {
  ngOnInit(): void {
    localStorage.removeItem(STORE_LOCAL_STORAGE_KEY);
  }
}
