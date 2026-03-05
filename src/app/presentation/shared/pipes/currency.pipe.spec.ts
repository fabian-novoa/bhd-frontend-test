import { CurrencyPipe } from './currency.pipe';

describe('CurrencyPipe', () => {
  let pipe: CurrencyPipe;

  beforeEach(() => {
    pipe = new CurrencyPipe();
  });

  it('should format RD currency correctly', () => {
    const result = pipe.transform(1500.50, 'RD');
    expect(result).toBe('RD$ 1,500.50');
  });

  it('should format US currency correctly', () => {
    const result = pipe.transform(2500.75, 'US');
    expect(result).toBe('US$ 2,500.75');
  });

  it('should handle zero amount', () => {
    const result = pipe.transform(0, 'RD');
    expect(result).toBe('RD$ 0.00');
  });

  it('should handle large amounts with thousands separator', () => {
    const result = pipe.transform(1500000, 'RD');
    expect(result).toBe('RD$ 1,500,000.00');
  });
});
