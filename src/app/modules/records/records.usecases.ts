import { Injectable } from '@angular/core';
import { Category, CategoryRequest } from '@app/apis/categories/models';
import { HistoryRequest } from '@app/apis/history/models';
import { CategoriesQuery } from '@app/stores/categories/query';
import { CategoriesService } from '@app/stores/categories/service';
import { HistoryService } from '@app/stores/history/service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecordsUseCases {
  constructor(
    private categoriesService: CategoriesService,
    private categoriesQuery: CategoriesQuery,
    private historyService: HistoryService,
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

  public addHistoryElement(event: HistoryRequest): Observable<void> {
    return this.historyService.addHistoryElement(event);
  }

}
