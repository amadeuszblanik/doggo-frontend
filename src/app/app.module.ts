import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SignUpComponent } from './routes/sign-up/sign-up.component';
import { MatInputModule } from '@angular/material/input';
import { TemplatesModule } from './templates/templates.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { SignUpEffects } from './store/effects/sign-up.effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { SignInComponent } from './routes/sign-in/sign-in.component';
import { SignInEffects } from './store/effects/sign-in.effects';
import { HomeComponent } from './routes/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { PetsComponent } from './routes/pets/pets.component';
import { PetsEffects } from './store/effects/pets.effects';
import { PetsAddEffects } from './store/effects/pets-add.effects';
import { PetsAddComponent } from './routes/pets-add/pets-add.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { PetsListComponent } from './components/pets-list/pets-list.component';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ErrorNotFoundComponent } from './routes/error-not-found/error-not-found.component';
import { PetWeightComponent } from './routes/pet-weight/pet-weight.component';
import { PetDetailsComponent } from './routes/pet-details/pet-details.component';
import { PetWeightListComponent } from './components/pet-weight-list/pet-weight-list.component';
import { PetDetailsEffects } from './store/effects/pet-details.effects';
import { PetWeightAddComponent } from './components/pet-weight-add/pet-weight-add.component';
import { MatCardModule } from '@angular/material/card';
import { ResetPasswordComponent } from './routes/reset-password/reset-password.component';
import { AuthEffects } from './store/effects/auth.effects';
import { RequestResetPasswordComponent } from './routes/request-reset-password/request-reset-password.component';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatInputModule,
  MatSnackBarModule,
  MatSelectModule,
  MatTableModule,
  MatListModule,
  MatCardModule,
];

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    PetsComponent,
    PetsAddComponent,
    PetsListComponent,
    NavigationComponent,
    ErrorNotFoundComponent,
    PetWeightComponent,
    PetDetailsComponent,
    PetWeightListComponent,
    PetWeightAddComponent,
    ResetPasswordComponent,
    RequestResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...MATERIAL_MODULES,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AuthEffects, SignUpEffects, SignInEffects, PetsEffects, PetsAddEffects, PetDetailsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    TemplatesModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AuthGuard,
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
