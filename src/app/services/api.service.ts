import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AuthSignUpDto } from '../dto/auth-sign-up.dto';
import { CommonErrorResponse } from '../types/common-error-response.type';
import { MessageApiResponse } from '../apiResponse/message.api-response';
import { AuthSignInDto } from '../dto/auth-sign-in.dto';
import { SignInApiResponse } from '../apiResponse/sign-in.api-response';
import { PetsSingleApiResponse } from '../apiResponse/pets-single.api-response';
import { PetCreateDto } from '../dto/pet-add.dto';
import { PetWeightCreateDto } from '../dto/pet-weight-create.dto';
import { AuthResetPasswordDto } from '../dto/auth-reset-password.dto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  signUp(body: AuthSignUpDto): Observable<MessageApiResponse | CommonErrorResponse> {
    return this.post<MessageApiResponse, AuthSignUpDto>('auth/sign-up', body);
  }

  requestResetPassword(userEmail: string): Observable<MessageApiResponse | CommonErrorResponse> {
    return this.get<MessageApiResponse>(`auth/reset-password?user-email=${userEmail}`);
  }

  resetPassword(token: string, body: AuthResetPasswordDto): Observable<CommonErrorResponse> {
    return this.put<CommonErrorResponse, AuthResetPasswordDto>(`auth/reset-password?token=${token}`, body);
  }

  signIn(body: AuthSignInDto): Observable<SignInApiResponse | CommonErrorResponse> {
    return this.post<SignInApiResponse, AuthSignUpDto>('auth/sign-in', body);
  }

  petsList(): Observable<PetsSingleApiResponse[]> {
    return this.get<PetsSingleApiResponse[]>('pets/my');
  }

  petDetails(id: string | number): Observable<PetsSingleApiResponse> {
    return this.get<PetsSingleApiResponse>(`pets/${id}`);
  }

  petWeightAdd(id: string | number, body: PetWeightCreateDto): Observable<true> {
    return this.post<true, PetWeightCreateDto>(`pets/${id}/weight`, body);
  }

  petsAdd(body: PetCreateDto): Observable<PetsSingleApiResponse> {
    return this.post<PetsSingleApiResponse, PetCreateDto>('pets/add', body);
  }

  private get<T>(endpoint: string): Observable<T> {
    return this.httpClient.get<T>(`${environment.apiUrl}/${endpoint}`);
  }

  private post<T, B>(endpoint: string, body: B | null): Observable<T> {
    return this.httpClient.post<T>(`${environment.apiUrl}/${endpoint}`, body);
  }

  private put<T, B>(endpoint: string, body: B | null): Observable<T> {
    return this.httpClient.put<T>(`${environment.apiUrl}/${endpoint}`, body);
  }
}
