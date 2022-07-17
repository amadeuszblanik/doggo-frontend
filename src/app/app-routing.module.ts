import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/page/page.component';
import { AuthSignInPageComponent } from './auth/sign-in/page/page.component';
import { AuthSignOffPageComponent } from './auth/sign-off/page/page.component';
import { AuthSignUpPageComponent } from './auth/sign-up/page/page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'auth/sign-in',
    component: AuthSignInPageComponent,
  },
  {
    path: 'auth/sign-off',
    component: AuthSignOffPageComponent,
  },
  {
    path: 'auth/sign-up',
    component: AuthSignUpPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
