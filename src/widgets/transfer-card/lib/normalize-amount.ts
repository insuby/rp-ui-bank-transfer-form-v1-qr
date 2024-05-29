import { Currency } from '../typings';

export function normalizeAmount(amount: number, currency: Currency): number {
  if (currency.dimension === 0) {
    return amount;
  }

  const original = String(amount);
  const fraction = original.slice(-currency.dimension);
  const integer = original.slice(0, original.length - currency.dimension);

  return parseFloat(`${integer}.${fraction}`);
}
