import { createReducer, on } from '@ngrx/store';
import { categoriesAdapter, CategoryState } from './category.adapters';
import { CategoryActions } from './category.actions';

export const initialState: CategoryState = {
  categories: categoriesAdapter.getInitialState(),
  isLoading: false,
};

export const categoryReducer = createReducer(
  initialState,
  on(CategoryActions.removeCategorySuccess, (state, { categoryId }) => ({
    ...state,
    categories: categoriesAdapter.removeOne(categoryId, state.categories),
  })),
  on(CategoryActions.addCategorySuccess, (state, { category }) => ({
    ...state,
    categories: categoriesAdapter.addOne(category, state.categories),
  })),
  on(CategoryActions.retrievedCategoryList, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(CategoryActions.retrievedCategoryListFailure, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(CategoryActions.retrievedCategoryListSuccess, (state, { categories }) => ({
    ...state,
    isLoading: false,
    categories: categoriesAdapter.setAll(categories, state.categories),
  }))
);
