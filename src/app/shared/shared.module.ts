import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TopBarComponent, SideNavComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, RouterModule],
  exports: [TopBarComponent, SideNavComponent],
})
export class SharedModule {}
