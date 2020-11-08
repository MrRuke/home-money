import { Injectable } from '@angular/core';
import { CategoriesState } from '@app/stores/categories/model';
import { EntityStore, StoreConfig } from '@datorama/akita';

@StoreConfig({ name: 'events' })
@Injectable({ providedIn: 'root' })
export class CategoriesStore extends EntityStore<CategoriesState> {
  constructor() {
    super();
  }
}
