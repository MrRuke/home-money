export interface AccountRequest {
  value: number;
  currency: AccountCurrencyTypes;
}

export enum AccountCurrencyTypes {
  RUB = 'RUB',
}

export interface Account extends AccountRequest {
  id: number;
}
