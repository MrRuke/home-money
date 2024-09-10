export enum AccountCurrencyTypes {
  RUB = "RUB",
  EUR = "EUR",
  USD = "USD",
}

export type AccountElement = {
  value: number;
  currency: AccountCurrencyTypes;
  id: string;
};

export type AccountRequest = Omit<AccountElement, "id">;
