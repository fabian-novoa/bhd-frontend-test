import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
  standalone: true
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number, currency: 'RD' | 'US' = 'RD'): string {
    if (value === null || value === undefined) return '';

    const formatted = value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    return currency === 'RD' ? `RD$ ${formatted}` : `US$ ${formatted}`;
  }
}
