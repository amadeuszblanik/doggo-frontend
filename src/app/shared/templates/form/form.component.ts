import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shared-template-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SharedTemplateFormComponent {
  @Input() formGroup!: FormGroup;
  @Output() submit = new EventEmitter<SubmitEvent | undefined>();
}
