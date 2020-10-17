import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, CategoryRequest } from '@app/apis/categories/models';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BaseApi } from '../base-api';

@Injectable({ providedIn: 'root' })
export class CategoriesApi extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  public addCategory(category: CategoryRequest): Observable<Category> {
    return this.post('categories', category).pipe(delay(400));
  }

  public getCategories(): Observable<Category[]> {
    return this.get('categories').pipe(delay(400));
  }

  public updateCategory(category: Category): Observable<Category> {
    return this.put(`categories/${category.id}`, category).pipe(delay(400));
  }

  public getCategoryById(id: number): Observable<Category> {
    return this.get(`categories/${id}`).pipe(delay(400));
  }
}
