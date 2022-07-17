import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsMyPageComponent } from './my/page/page.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PetsMyPageComponent],
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule, SharedModule],
  exports: [PetsMyPageComponent],
})
export class PetsModule {}
