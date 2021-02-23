import { Injectable } from '@angular/core';
import { CategoryRequest } from '@app/apis/categories/models';
import { CategoriesService } from '@app/stores/categories/service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecordsUseCases {
  constructor(
    private categoriesService: CategoriesService,
  ) {
  }

  public createCategory(category: CategoryRequest): Observable<void> {
    return this.categoriesService.addElement(category);
  }

}
