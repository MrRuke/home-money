import { Category } from "@app/apis/categories/models";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { BaseState } from "../state";

export type CategoryState = {
    categories: EntityState<Category>;
} & BaseState;

export const categoriesAdapter: EntityAdapter<Category> =
    createEntityAdapter<Category>();
