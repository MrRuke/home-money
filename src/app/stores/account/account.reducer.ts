import { createReducer, on } from "@ngrx/store";
import { AccountsActions } from "./account.actions";
import { accountAdapter, AccountState } from "./account.adapters";

export const initialState: AccountState = {
  accounts: accountAdapter.getInitialState(),
  isLoading: false,
};

export const accountReducer = createReducer(
  initialState,
  on(AccountsActions.removeAccountSuccess, (state, { accountId }) => ({
    ...state,
    accounts: accountAdapter.removeOne(accountId, state.accounts),
  })),
  on(AccountsActions.addAccountSuccess, (state, { account }) => ({
    ...state,
    accounts: accountAdapter.addOne(account, state.accounts),
  })),
  on(AccountsActions.retrievedAccountList, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(AccountsActions.retrievedAccountListFailure, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(AccountsActions.retrievedAccountListSuccess, (state, { accounts }) => ({
    ...state,
    isLoading: false,
    accounts: accountAdapter.setAll(accounts, state.accounts),
  }))
);
