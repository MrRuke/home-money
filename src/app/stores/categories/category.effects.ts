import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { of } from "rxjs";
import { CategoryActions } from "./category.actions";
import { CategoryService } from "./category.service";

export const createNewCategory = createEffect(
  (actions$ = inject(Actions), categoryService = inject(CategoryService)) => {
    return actions$.pipe(
      ofType(CategoryActions.addCategory),
      exhaustMap((payload) =>
        categoryService.add(payload.category).pipe(
          map((category) => CategoryActions.addCategorySuccess({ category })),
          catchError((error: { message: string }) =>
            of(CategoryActions.addCategoryFailure({ errorMsg: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const loadCategories = createEffect(
  (actions$ = inject(Actions), categoryService = inject(CategoryService)) => {
    return actions$.pipe(
      ofType(CategoryActions.retrievedCategoryList),
      exhaustMap(() =>
        categoryService.load().pipe(
          map((categories) =>
            CategoryActions.retrievedCategoryListSuccess({ categories })
          ),
          catchError((error: { message: string }) =>
            of(
              CategoryActions.retrievedCategoryListFailure({
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

export const removeCategory = createEffect(
  (actions$ = inject(Actions), categoryService = inject(CategoryService)) => {
    return actions$.pipe(
      ofType(CategoryActions.removeCategory),
      exhaustMap((payload) =>
        categoryService.remove(payload.categoryId).pipe(
          map(() =>
            CategoryActions.removeCategorySuccess({
              categoryId: payload.categoryId,
            })
          ),
          catchError((error: { message: string }) =>
            of(
              CategoryActions.removeCategoryFailure({ errorMsg: error.message })
            )
          )
        )
      )
    );
  },
  { functional: true }
);
