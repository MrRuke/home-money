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
