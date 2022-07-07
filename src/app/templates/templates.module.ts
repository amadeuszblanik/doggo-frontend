import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FailedComponent } from './failed/failed.component';
import { SuccessComponent } from './success/success.component';
import { PendingComponent } from './pending/pending.component';

@NgModule({
  declarations: [FormComponent, FailedComponent, SuccessComponent, PendingComponent],
  exports: [FormComponent, FailedComponent, SuccessComponent, PendingComponent],
  imports: [CommonModule],
})
export class TemplatesModule {}
