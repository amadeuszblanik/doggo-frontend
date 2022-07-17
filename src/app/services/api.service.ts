import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthSignInDto } from '../dto/auth-sign-in.dto';
import { SignInApiResponse } from '../api-responses/sign-in.api-response';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  signIn(body: AuthSignInDto): Observable<SignInApiResponse> {
    return this.post<SignInApiResponse, AuthSignInDto>('auth/sign-in', body);
  }

  private get<T>(endpoint: string): Observable<T> {
    return this.httpClient.get<T>(`${environment.apiUrl}/${endpoint}`);
  }

  private post<T, B>(endpoint: string, body: B | null): Observable<T> {
    return this.httpClient.post<T>(`${environment.apiUrl}/${endpoint}`, body);
  }
}
