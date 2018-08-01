import { FormControl } from '@angular/forms';

export function properCaseValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^[A-Z][a-z0-9]*(\s[A-Z][a-z0-9]*)*$/g)) {
    return { invalidProperCase: true };
  }
}
