import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthSignInPageComponent } from './sign-in/page/page.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthTemplateFormComponent } from './templates/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthSignOffPageComponent } from './sign-off/page/page.component';
import { AuthSignUpPageComponent } from './sign-up/page/page.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [AuthSignInPageComponent, AuthTemplateFormComponent, AuthSignOffPageComponent, AuthSignUpPageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule,
    SharedModule,
    MatSnackBarModule,
    MatSelectModule,
  ],
  exports: [AuthSignInPageComponent, AuthTemplateFormComponent, AuthSignOffPageComponent, AuthSignUpPageComponent],
})
export class AuthModule {}
