import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { BaseApi } from '@app/shared/core/base';
import { Category } from '../models/category.model';

@Injectable()

export class CategoriesService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  public addCategory(category: Category): Observable<Category> {
    return this.post('categories', category);
  }

  public getCategories(): Observable<Category[]> {
    return this.get('categories');
  }

  public updateCategory(category: Category): Observable<Category> {
    return this.put(`categories/${category.id}`, category);
  }

  public getCategoryById(id: number): Observable<Category> {
    return this.get(`categories/${id}`);
  }

}
