import { Category } from 'app/system/shared/models/category.model';
import { EntityState } from '@datorama/akita';

export interface CategoriesState extends EntityState<Category> {
}
