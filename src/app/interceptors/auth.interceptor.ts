import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { HTTP_STATUS_NOT_FOUND, HTTP_STATUS_UNAUTHORIZED } from '../globals/httpStatus';
import { AppState, STORE_LOCAL_STORAGE_KEY } from '../store';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let accessToken: string | null = null;

    try {
      const store = JSON.parse(localStorage.getItem(STORE_LOCAL_STORAGE_KEY) || '') as AppState;
      accessToken = store.auth.accessToken;
    } catch (e) {
      accessToken = null;
    }

    if (!accessToken) {
      return next.handle(request);
    }

    const reqCloned = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${accessToken}`),
    });

    return next.handle(reqCloned).pipe(
      catchError((err: HttpErrorResponse) => {
        switch (err.status) {
          case HTTP_STATUS_UNAUTHORIZED:
            localStorage.removeItem('access_token');
            void this.router.navigate(['/auth/sign-in']);

            break;
          case HTTP_STATUS_NOT_FOUND:
            void this.router.navigate(['/error/not-found']);

            break;
        }

        return throwError(() => err);
      }),
    );
  }
}
