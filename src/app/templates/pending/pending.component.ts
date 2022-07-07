import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss'],
})
export class PendingComponent {
  @Input() headline?: string | null;
}
