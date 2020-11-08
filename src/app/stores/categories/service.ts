import { Injectable } from '@angular/core';
import { CategoriesApi } from '@app/apis/categories/api';
import { CategoryRequest } from '@app/apis/categories/models';
import { CategoriesStore } from '@app/stores/categories/store';
import { Observable } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  constructor(
    private api: CategoriesApi,
    private store: CategoriesStore,
  ) {
  }

  public load(): Observable<void> {
    this.store.setLoading(true);

    return this.api.getCategories().pipe(
      tap(categories => this.store.set(categories)),
      tap(() => this.store.setLoading(false)),
      mapTo(void 0),
    );
  }

  public addElement(category: CategoryRequest): Observable<void> {
    this.store.setLoading(true);

    return this.api.addCategory(category).pipe(
      tap(res => this.store.add(res)),
      tap(() => this.store.setLoading(false)),
      mapTo(void 0),
    );
  }
}
