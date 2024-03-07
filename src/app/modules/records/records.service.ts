import { Injectable } from '@angular/core';
import { Category, CategoryRequest } from '@app/apis/categories/models';
import { CategoriesQuery } from '@app/stores/categories/query';
import { CategoriesService } from '@app/stores/categories/service';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecordsService{
  constructor(
    private categoriesService: CategoriesService,
    private categoriesQuery: CategoriesQuery,
  ) {
  }

  public loadCategories(): Observable<void> {
    return this.categoriesService.load();
  }


  public createCategory(category: CategoryRequest): Observable<void> {
    return this.categoriesService.addElement(category);
  }

  public selectCategories(): Observable<Category[]> {
    return this.categoriesQuery.selectCategories();
  }

  public addHistoryElement(event: any): Observable<void> {
    return of(void 0);
    // return this.historyService.addHistoryElement(event);
  }

}
