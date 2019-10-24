import { Injectable } from '@angular/core';
import { Category } from '@app/system/shared/models/category.model';
import { CategoriesService } from '@app/system/shared/stores/categories/service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecordsPageUseCases {
  constructor(
    private categoriesService: CategoriesService,
  ) {
  }

  public loadCategories(): Observable<void> {
    return this.categoriesService.loadValue();
  }

  public addCategory(category: Category): Observable<void> {
    return this.categoriesService.addCategory(category);
  }
  
  public updateCategory(category: Category): Observable<void> {
    return this.categoriesService.updateCategory(category);
  }
}
