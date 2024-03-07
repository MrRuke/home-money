import { Injectable } from '@angular/core';
import { Category } from '@app/apis/categories/models';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecordsService{
  constructor(
  ) {
  }

  public loadCategories(): Observable<void> {
    
    return of(void 0);
    // return this.categoriesService.load();
  }


  public createCategory(category: any): Observable<void> {
    return of(void 0);
    // return this.categoriesService.addElement(category);
  }

  public selectCategories(): Observable<Category[]> {
    return of([]);
    // return this.categoriesQuery.selectCategories();
  }

  public addHistoryElement(event: any): Observable<void> {
    return of(void 0);
    // return this.historyService.addHistoryElement(event);
  }

}
