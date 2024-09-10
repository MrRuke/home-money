import { inject } from "@angular/core";
import { AccountService } from "./account.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AccountsActions } from "./account.actions";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { of } from "rxjs";

export const createNewAccount = createEffect(
  (actions$ = inject(Actions), accountService = inject(AccountService)) => {
    return actions$.pipe(
      ofType(AccountsActions.addAccount),
      exhaustMap((payload) =>
        accountService.add(payload.account).pipe(
          map((account) => AccountsActions.addAccountSuccess({ account })),
          catchError((error: { message: string }) =>
            of(AccountsActions.addAccountFailure({ errorMsg: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const loadAccounts = createEffect(
  (actions$ = inject(Actions), accountService = inject(AccountService)) => {
    return actions$.pipe(
      ofType(AccountsActions.retrievedAccountList),
      exhaustMap(() =>
        accountService.load().pipe(
          map((accounts) =>
            AccountsActions.retrievedAccountListSuccess({ accounts })
          ),
          catchError((error: { message: string }) =>
            of(
              AccountsActions.retrievedAccountListFailure({
                errorMsg: error.message,
              })
            )
          )
        )
      )
    );
  },
  { functional: true }
);

export const removeAccount = createEffect(
  (actions$ = inject(Actions), accountService = inject(AccountService)) => {
    return actions$.pipe(
      ofType(AccountsActions.removeAccount),
      exhaustMap((payload) =>
        accountService.delete(payload.accountId).pipe(
          map(() =>
            AccountsActions.removeAccountSuccess({
              accountId: payload.accountId,
            })
          ),
          catchError((error: { message: string }) =>
            of(
              AccountsActions.removeAccountFailure({ errorMsg: error.message })
            )
          )
        )
      )
    );
  },
  { functional: true }
);
