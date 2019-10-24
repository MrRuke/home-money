export interface Bill {
  value: number;
  currency: string;
}

export interface Currency {
  base: string;
  date: string;
  rates: CurrencyRate[];
  success: boolean;
  timestamp: number;
}

export type CurrencyRate = (key: CurrencyValue) => number;

export enum CurrencyValue {
  USD = 'USD',
  EUR = 'EUR',
  RUB = 'RUB',
}
