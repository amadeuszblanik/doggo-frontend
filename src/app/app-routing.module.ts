import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './routes/sign-up/sign-up.component';
import { SignInComponent } from './routes/sign-in/sign-in.component';
import { HomeComponent } from './routes/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { PetsComponent } from './routes/pets/pets.component';
import { PetsAddComponent } from './routes/pets-add/pets-add.component';
import { ErrorNotFoundComponent } from './routes/error-not-found/error-not-found.component';
import { PetDetailsComponent } from './routes/pet-details/pet-details.component';
import { PetWeightComponent } from './routes/pet-weight/pet-weight.component';
import { ResetPasswordComponent } from './routes/reset-password/reset-password.component';
import { RequestResetPasswordComponent } from './routes/request-reset-password/request-reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'pets',
    component: PetsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'pets/add',
    component: PetsAddComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'pets/:id',
    component: PetDetailsComponent,
    canActivate: [AuthGuard],
    children: [{ path: 'weight', component: PetWeightComponent }],
  },
  {
    path: 'auth/sign-up',
    component: SignUpComponent,
  },
  {
    path: 'auth/sign-in',
    component: SignInComponent,
  },
  {
    path: 'auth/reset-password',
    component: RequestResetPasswordComponent,
  },
  {
    path: 'auth/reset-password-confirmation',
    component: ResetPasswordComponent,
  },
  {
    path: 'error/not-found',
    component: ErrorNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'error/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
