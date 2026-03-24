import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoriesApi } from '../../apis/categories/api';
import { Category, CategoryRequest } from '../../apis/categories/models';

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
