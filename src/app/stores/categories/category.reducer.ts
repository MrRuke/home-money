import { createReducer, on } from '@ngrx/store';
import { CategoryActions } from './category.actions';
import { Category } from '@app/apis/categories/models';


export const initialState: ReadonlyArray<Category> = [];

export const categoryReducer = createReducer(
  initialState,
  on(CategoryActions.removeCategory, (state, { categoryId }) =>
    state.filter((item) => item.id !== categoryId)
  ),
  on(CategoryActions.addCategory, (state, { category }) => {
    if (state.find(item => item.id === category.id)) return state;

    return [...state, category];
  }),
  on(CategoryActions.retrievedCategoryList, (_state, { categories }) => categories)
);