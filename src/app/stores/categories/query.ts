import { Injectable } from '@angular/core';
import { Category } from '@app/apis/categories/models';
import { CategoriesState } from '@app/stores/categories/model';
import { CategoriesStore } from '@app/stores/categories/store';
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
