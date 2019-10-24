import { Injectable } from '@angular/core';
import { CategoriesApi } from '@app/system/shared/api/categories-api';
import { Category } from '@app/system/shared/models/category.model';
import { CategoriesStore } from '@app/system/shared/stores/categories/store';
import { Observable } from 'rxjs';
import {
  mapTo,
  tap,
} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  constructor(
    private api: CategoriesApi,
    private store: CategoriesStore,
  ) {
  }

  public loadValue(): Observable<void> {
    this.store.setLoading(true);

    return this.api.getCategories().pipe(
      tap(categories => this.store.set(categories)),
      tap(() => this.store.setLoading(false)),
      mapTo(void 0),
    );
  }

  public addCategory(category: Category): Observable<void> {
    this.store.setLoading(true);

    return this.api.addCategory(category).pipe(
      tap(categories => this.store.add(categories)),
      tap(() => this.store.setLoading(false)),
      mapTo(void 0),
    );
  }

  public updateCategory(category: Category): Observable<void> {
    this.store.setLoading(true);

    return this.api.updateCategory(category).pipe(
      tap(categories => this.store.update(categories)),
      tap(() => this.store.setLoading(false)),
      mapTo(void 0),
    );
  }
}
