export interface AccountRequest {
  value: number;
  currency: AccountCurrencyTypes;
}

export enum AccountCurrencyTypes {
  RUB = 'RUB',
}

export interface AccountElement extends AccountRequest {
  id: number;
}
