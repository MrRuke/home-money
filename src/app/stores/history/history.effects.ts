import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { of } from "rxjs";
import { HistoryService } from "./history.service";
import { HistoryActions } from "./history.actions";

export const createNewHistory = createEffect(
    (actions$ = inject(Actions), historyService = inject(HistoryService)) => {
        return actions$.pipe(
            ofType(HistoryActions.addHistory),
            exhaustMap((payload) =>
                historyService.add(payload.history).pipe(
                    map((history) => HistoryActions.addHistorySuccess({ history })),
                    catchError((error: { message: string }) =>
                        of(HistoryActions.addHistoryFailure({ errorMsg: error.message }))
                    )
                )
            )
        );
    },
    { functional: true }
);

export const loadAccounts = createEffect(
    (actions$ = inject(Actions), historyService = inject(HistoryService)) => {
        return actions$.pipe(
            ofType(HistoryActions.retrievedHistoryList),
            exhaustMap(() =>
                historyService.load().pipe(
                    map((history) =>
                        HistoryActions.retrievedHistoryListSuccess({ history })
                    ),
                    catchError((error: { message: string }) =>
                        of(
                            HistoryActions.removeHistoryFailure({
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
    (actions$ = inject(Actions), historyService = inject(HistoryService)) => {
        return actions$.pipe(
            ofType(HistoryActions.removeHistory),
            exhaustMap((payload) =>
                historyService.delete(payload.historyId).pipe(
                    map(() =>
                        HistoryActions.removeHistorySuccess({
                            historyId: payload.historyId,
                        })
                    ),
                    catchError((error: { message: string }) =>
                        of(HistoryActions.removeHistoryFailure({ errorMsg: error.message }))
                    )
                )
            )
        );
    },
    { functional: true }
);
