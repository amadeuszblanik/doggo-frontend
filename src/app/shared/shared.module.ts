import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { SuccessComponent } from './components/success/success.component';
import { FailedComponent } from './components/failed/failed.component';
import { AgePipe } from './pipes/age.pipe';
import { FloatingActionButtonComponent } from './components/floating-action-button/floating-action-button.component';
import { SharedTemplateFormComponent } from './templates/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TopBarComponent,
    SideNavComponent,
    SuccessComponent,
    FailedComponent,
    AgePipe,
    FloatingActionButtonComponent,
    SharedTemplateFormComponent,
  ],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, RouterModule, ReactiveFormsModule],
  exports: [
    TopBarComponent,
    SideNavComponent,
    SuccessComponent,
    FailedComponent,
    AgePipe,
    FloatingActionButtonComponent,
    SharedTemplateFormComponent,
  ],
})
export class SharedModule {}
