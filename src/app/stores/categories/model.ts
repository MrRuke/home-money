import { Category } from '@app/apis/categories/models';
import { EntityState } from '@datorama/akita';

export interface CategoriesState extends EntityState<Category> {
}
