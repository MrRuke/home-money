import { Category } from "@app/apis/categories/models";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export interface CategoryState {
  categories: EntityState<Category>;
  isLoading: boolean;
}

export const categoriesAdapter: EntityAdapter<Category> =
  createEntityAdapter<Category>();
