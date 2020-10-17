import { Injectable } from '@angular/core';
import { Category } from 'app/system/shared/models/category.model';
import { CategoriesState } from 'app/system/shared/stores/categories/model';
import { CategoriesStore } from 'app/system/shared/stores/categories/store';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CategoriesQuery extends QueryEntity<CategoriesState> {
  constructor(store: CategoriesStore) {
    super(store);
  }

  public selectCategories(): Observable<Category[]> {
    return this.selectAll();
  }
}
