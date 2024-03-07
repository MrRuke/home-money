import { AccountElement } from '@app/apis/accounts/models';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectAccounts = createFeatureSelector<ReadonlyArray<AccountElement>>('accounts');

export const selectAccountCollection = createSelector(
  selectAccounts,
  (accounts) => accounts
);