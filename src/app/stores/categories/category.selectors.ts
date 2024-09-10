import { createFeatureSelector, createSelector } from "@ngrx/store";
import { categoriesAdapter, CategoryState } from "./category.adapters";

export const selectState = createFeatureSelector<CategoryState>("categories");
export const selectCategoriesEmptyState = createSelector(
  selectState,
  (state) => state.categories
);
export const selectIsLoading = createSelector(
  selectState,
  (state) => state.isLoading
);

const { selectAll: allCategories } = categoriesAdapter.getSelectors();
export const selectCategories = createSelector(
  selectCategoriesEmptyState,
  allCategories
);
