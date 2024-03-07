import { Category } from "@app/apis/categories/models";
import { createActionGroup, props } from "@ngrx/store";

export const CategoryActions = createActionGroup({
  source: 'Categories',
  events: {
    'Add category': props<{ category: Category }>(),
    'Remove category': props<{ categoryId: number }>(),
    'Retrieved Category List': props<{ categories: ReadonlyArray<Category> }>(),
  },
});
