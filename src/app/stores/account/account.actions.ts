import { AccountElement, AccountRequest } from "@app/apis/accounts/models";
import { createActionGroup, props } from "@ngrx/store";

export const AccountsActions = createActionGroup({
  source: 'Accounts',
  events: {
    'Add account': props<{ account: AccountRequest }>(),
    'Add account Success': props<{ account: AccountElement }>(),
    'Add account Failure': props<{ errorMsg: string }>(),
    'Remove account': props<{ accountId: number }>(),
    'Retrieved Account List': props<{ accounts: ReadonlyArray<AccountElement> }>(),
  },
});
