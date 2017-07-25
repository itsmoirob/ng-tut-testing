import { getCurrencies } from './getCurrencies';

describe('getCurrencies',  () => {
  it('should return supported currencies', () => {
    expect(getCurrencies()).toContain('GBP');
    expect(getCurrencies()).toContain('AUD');
    expect(getCurrencies()).toContain('EUR');
  });
});