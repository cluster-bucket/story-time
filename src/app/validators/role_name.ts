import { FormControl } from '@angular/forms';

// http://jacks.tumblr.com/post/33785796042/lets-reconsider-our-users
export function roleNameValidator(control: FormControl): { [s: string]: boolean } {
  const BANNED_WORDS: string[] = ['USER', 'CONSUMER', 'END-USER', 'END USER'];
  if (BANNED_WORDS.includes(control.value.toUpperCase()) {
    return { invalidRoleName: true };
  }
}
