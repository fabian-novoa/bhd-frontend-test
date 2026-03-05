import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastDigits',
  standalone: true
})
export class LastDigitsPipe implements PipeTransform {
  transform(number: string, digits: number = 4): string {
    if (!number) return '';
    return number.slice(-digits);
  }
}
