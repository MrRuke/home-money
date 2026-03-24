import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BaseApi } from '../base-api';
import { Category, CategoryRequest } from './models';

@Injectable({ providedIn: 'root' })
export class CategoriesApi extends BaseApi {
    public addCategory(category: CategoryRequest): Observable<Category> {
        return this.post<CategoryRequest, Category>('categories', category).pipe(delay(400));
    }

    public getCategories(): Observable<Category[]> {
        return this.get<Category[]>('categories').pipe(delay(400));
    }

    public updateCategory(category: Category): Observable<Category> {
        return this.put<Category, Category>(`categories/${category.id}`, category).pipe(delay(400));
    }

    public getCategoryById(id: number): Observable<Category> {
        return this.get<Category>(`categories/${id}`).pipe(delay(400));
    }
}
