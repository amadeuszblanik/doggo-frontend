import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export default class CustomValidators {
  static MatchValidator(source: string, target: string, errorKey: string = 'mismatch'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formControl = control.get(source);
      const formControlToMatch = control.get(target);

      return formControl && formControlToMatch && formControl.value !== formControlToMatch.value ? { [errorKey]: 'mismatch' } : null;
    };
  }
}
