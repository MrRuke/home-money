import { AccountElement } from '@app/apis/accounts/models';
import { createReducer, on } from '@ngrx/store';
import { AccountsActions } from './account.actions';


export const initialState: ReadonlyArray<AccountElement> = [];

export const accountReducer = createReducer(
  initialState,
  on(AccountsActions.removeAccountSuccess, (state, { accountId }) =>
    state.filter((item) => item.id !== accountId)
  ),
  on(AccountsActions.addAccountSuccess, (state, { account }) => {
    if (state.find(item => item.id === account.id)) return state;

    return [...state, account];
  }),
  on(AccountsActions.retrievedAccountListSuccess, (_state, { accounts }) => accounts)
);