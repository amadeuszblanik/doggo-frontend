import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import AuthEffect from './store/auth/auth.effect';
import ConfigEffect from './store/config/config.effect';
import { PetsModule } from './pets/pets.module';
import PetsEffect from './store/pets/pets.effect';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    SharedModule,
    AuthModule,
    PetsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AuthEffect, ConfigEffect, PetsEffect]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MatSidenavModule,
    HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
