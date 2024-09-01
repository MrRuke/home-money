import { AccountElement, AccountRequest } from "@app/apis/accounts/models";
import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const AccountsActions = createActionGroup({
  source: 'Accounts',
  events: {
    'Add account': props<{ account: AccountRequest }>(),
    'Add account Success': props<{ account: AccountElement }>(),
    'Add account Failure': props<{ errorMsg: string }>(),
    'Remove account': props<{ accountId: number }>(),
    'Remove account Success': props<{ accountId: number }>(),
    'Remove account Failure': props<{ errorMsg: string }>(),
    'Retrieved Account List': emptyProps(),
    'Retrieved Account List Success': props<{ accounts: ReadonlyArray<AccountElement> }>(),
    'Retrieved Account List Failure': props<{ errorMsg: string }>(),
  },
});
