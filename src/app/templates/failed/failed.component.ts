import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-failed',
  templateUrl: './failed.component.html',
  styleUrls: ['./failed.component.scss'],
})
export class FailedComponent {
  @Input() headline?: string | null;
}
