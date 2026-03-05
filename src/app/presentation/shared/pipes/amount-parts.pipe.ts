import { Pipe, PipeTransform } from '@angular/core';

export interface AmountParts {
  symbol: string;
  integerPart: string;
  decimalPart: string;
}

@Pipe({
  name: 'amountParts',
  standalone: true
})
export class AmountPartsPipe implements PipeTransform {
  transform(value: number, currency: 'RD' | 'US' = 'RD'): AmountParts {
    if (value === null || value === undefined) {
      return { symbol: '', integerPart: '', decimalPart: '' };
    }

    const symbol = currency === 'RD' ? 'RD$ ' : 'US$ ';
    const fixed = value.toFixed(2);
    const [intPart, decPart] = fixed.split('.');
    const integerWithCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return {
      symbol,
      integerPart: integerWithCommas,
      decimalPart: '.' + decPart
    };
  }
}
