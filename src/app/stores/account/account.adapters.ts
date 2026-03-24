import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { AccountElement } from "../../apis/accounts/models";
import { BaseState } from "../state";

export type AccountState = {
    accounts: EntityState<AccountElement>;
} & BaseState;

export const accountAdapter: EntityAdapter<AccountElement> =
    createEntityAdapter<AccountElement>();
