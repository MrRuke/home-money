import { AccountElement } from '@app/apis/accounts/models';
import { createReducer, on } from '@ngrx/store';
import { AccountsActions } from './account.actions';


export const initialState: ReadonlyArray<AccountElement> = [];

export const accountReducer = createReducer(
  initialState,
  on(AccountsActions.removeAccount, (state, { accountId }) =>
    state.filter((item) => item.id !== accountId)
  ),
  on(AccountsActions.addAccountSuccess, (state, { account }) => {
    if (state.find(item => item.id === account.id)) return state;

    return [...state, account];
  }),
  on(AccountsActions.retrievedAccountList, (_state, { accounts }) => accounts)
);