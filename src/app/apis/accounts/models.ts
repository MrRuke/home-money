export interface AccountRequest {
  value: number;
  currency: AccountCurrencyTypes;
}

export enum AccountCurrencyTypes {
  RUB = 'RUB',
  EUR = 'EUR',
  USD = 'USD',
}

export interface AccountElement extends AccountRequest {
  id: string;
}
