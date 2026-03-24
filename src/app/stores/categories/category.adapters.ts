import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Category } from "../../apis/categories/models";
import { BaseState } from "../state";

export type CategoryState = {
    categories: EntityState<Category>;
} & BaseState;

export const categoriesAdapter: EntityAdapter<Category> =
    createEntityAdapter<Category>();
