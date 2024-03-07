import { AccountElement } from "@app/apis/accounts/models";
import { createActionGroup, props } from "@ngrx/store";

export const AccountsActions = createActionGroup({
  source: 'Accounts',
  events: {
    'Add account': props<{ account: AccountElement }>(),
    'Remove account': props<{ accountId: number }>(),
    'Retrieved Account List': props<{ accounts: ReadonlyArray<AccountElement> }>(),
  },
});
