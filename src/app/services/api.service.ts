import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthSignInDto } from '../dto/auth-sign-in.dto';
import { SignInApiResponse } from '../api-responses/sign-in.api-response';
import { PublicConfigApiResponse } from '../api-responses/public-config.api-response';
import { AuthSignUpDto } from '../dto/auth-sign-up.dto';
import { CommonMessageApiResponse } from '../api-responses/common-message.api-response';
import { PetsMyApiResponse } from '../api-responses/pets-my.api-response';
import { PetCreateDto } from '../dto/pet-create.dto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  config(): Observable<PublicConfigApiResponse> {
    return this.get<PublicConfigApiResponse>('config');
  }

  signIn(body: AuthSignInDto): Observable<SignInApiResponse> {
    return this.post<SignInApiResponse, AuthSignInDto>('auth/sign-in', body);
  }

  signUp(body: AuthSignUpDto): Observable<CommonMessageApiResponse> {
    return this.post<CommonMessageApiResponse, AuthSignUpDto>('auth/sign-up', body);
  }

  myPets(): Observable<PetsMyApiResponse[]> {
    return this.get<PetsMyApiResponse[]>('pets/my');
  }

  addPets(body: PetCreateDto): Observable<PetsMyApiResponse> {
    return this.post<PetsMyApiResponse, PetCreateDto>('pets/add', body);
  }

  private get<T>(endpoint: string): Observable<T> {
    return this.httpClient.get<T>(`${environment.apiUrl}/${endpoint}`);
  }

  private post<T, B>(endpoint: string, body: B | null): Observable<T> {
    return this.httpClient.post<T>(`${environment.apiUrl}/${endpoint}`, body);
  }
}
