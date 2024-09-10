import { AccountElement } from "@app/apis/accounts/models";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { BaseState } from "../state";

export type AccountState = {
  accounts: EntityState<AccountElement>;
} & BaseState;

export const accountAdapter: EntityAdapter<AccountElement> =
  createEntityAdapter<AccountElement>();
