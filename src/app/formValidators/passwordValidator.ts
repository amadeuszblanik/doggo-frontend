import { FormControl, ValidationErrors } from '@angular/forms';
import { PASSWORD_REGEXP } from '../globals/regexp';

const PasswordValidator = (formControl: FormControl): ValidationErrors => {
  const value = formControl && (formControl.value as string);

  const password = !PASSWORD_REGEXP.test(value);

  if (!password) {
    return {};
  }

  return { password };
};

export default PasswordValidator;
