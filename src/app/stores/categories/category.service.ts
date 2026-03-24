import { inject, Injectable } from '@angular/core';
import { CategoriesApi } from '@app/apis/categories/api';
import { Category, CategoryRequest } from '@app/apis/categories/models';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CategoryService {
    private api = inject(CategoriesApi);

    public load(): Observable<Category[]> {
        return this.api.getCategories();
    }

    public add(category: CategoryRequest): Observable<Category> {
        return this.api.addCategory(category);
    }

    public remove(categoryId: number): Observable<void> {
        console.log('categoryId', categoryId);
        return of(void 0);
    }
}
