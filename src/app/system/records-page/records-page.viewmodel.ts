import { Injectable } from '@angular/core';
import { Category } from 'app/system/shared/models/category.model';
import { CategoriesQuery } from 'app/system/shared/stores/categories/query';
import { EventsQuery } from 'app/system/shared/stores/events/query';
import {
  combineLatest,
  Observable,
} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RecordsPageViewModel {
  public readonly categories = this.selectCategories();
  public readonly loading = this.selectLoading();

  constructor(
    private categoriesQuery: CategoriesQuery,
    private eventsQuery: EventsQuery,
  ) {
  }

  private selectCategories(): Observable<Category[]> {
    return this.categoriesQuery.selectCategories();
  }

  private selectLoading(): Observable<boolean> {
    return combineLatest([
      this.categoriesQuery.selectLoading(),
      this.eventsQuery.selectLoading(),
    ]).pipe(map(item => item.some(Boolean)));
  }
}
