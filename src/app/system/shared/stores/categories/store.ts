import { Injectable } from '@angular/core';
import { CategoriesState } from 'app/system/shared/stores/categories/model';
import {
  EntityStore,
  StoreConfig,
} from '@datorama/akita';

@StoreConfig({ name: 'categories' })
@Injectable({ providedIn: 'root' })
export class CategoriesStore extends EntityStore<CategoriesState> {
  constructor() {
    super();
  }
}
