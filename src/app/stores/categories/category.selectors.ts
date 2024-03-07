import { Category } from '@app/apis/categories/models';
import { createFeatureSelector } from '@ngrx/store';

export const selectCategories = createFeatureSelector<ReadonlyArray<Category>>('categories');
