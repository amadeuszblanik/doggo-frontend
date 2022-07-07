import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent {
  @Input() headline?: string | null;
}
