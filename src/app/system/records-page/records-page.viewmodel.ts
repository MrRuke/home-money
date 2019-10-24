import { Injectable } from '@angular/core';
import { Category } from '@app/system/shared/models/category.model';
import { CategoriesQuery } from '@app/system/shared/stores/categories/query';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecordsPageViewModel {
  public readonly categories = this.selectCategories();
  public readonly loading = this.categoriesQuery.selectLoading();

  constructor(
    private categoriesQuery: CategoriesQuery,
  ) {
  }

  private selectCategories(): Observable<Category[]> {
    return this.categoriesQuery.selectCategories();
  }
}
