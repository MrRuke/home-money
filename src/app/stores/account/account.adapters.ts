import { AccountElement } from "@app/apis/accounts/models";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export interface AccountState {
  accounts: EntityState<AccountElement>;
  isLoading: boolean;
}

export const accountAdapter: EntityAdapter<AccountElement> =
  createEntityAdapter<AccountElement>();
