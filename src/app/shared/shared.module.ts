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

@NgModule({
  declarations: [TopBarComponent, SideNavComponent, SuccessComponent, FailedComponent, AgePipe],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, RouterModule],
  exports: [TopBarComponent, SideNavComponent, SuccessComponent, FailedComponent, AgePipe],
})
export class SharedModule {}
