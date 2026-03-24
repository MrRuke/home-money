import { createFeatureSelector, createSelector } from "@ngrx/store";
import { accountAdapter, AccountState } from "./account.adapters";

export const selectState = createFeatureSelector<AccountState>("accounts");
export const selectAccountsEmptyState = createSelector(
    selectState,
    (state) => state.accounts
);
export const selectIsLoading = createSelector(
    selectState,
    (state) => state.isLoading
);

const { selectAll: allAccounts } = accountAdapter.getSelectors();
export const selectAccounts = createSelector(
    selectAccountsEmptyState,
    allAccounts
);
