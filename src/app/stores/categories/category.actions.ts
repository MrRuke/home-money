import { Category, CategoryRequest } from "@app/apis/categories/models";
import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const CategoryActions = createActionGroup({
    source: "Categories",
    events: {
        "Add category": props<{ category: CategoryRequest }>(),
        "Add category Success": props<{ category: Category }>(),
        "Add category Failure": props<{ errorMsg: string }>(),
        "Remove category": props<{ categoryId: number }>(),
        "Remove category Success": props<{ categoryId: number }>(),
        "Remove category Failure": props<{ errorMsg: string }>(),
        "Retrieved Category List": emptyProps(),
        "Retrieved Category List Success": props<{ categories: Category[] }>(),
        "Retrieved Category List Failure": props<{ errorMsg: string }>(),
    },
});
