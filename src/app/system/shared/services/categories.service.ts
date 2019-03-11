import {BaseApi} from "../../../shared/core/base";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Category} from "../models/category.model";
import {Observable} from "rxjs/Rx";

@Injectable()

export class CategoriesService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  addCategory(category: Category): Observable<Category> {
    return this.post('categories', category);
  }

  getCategories(): Observable<Category[]> {
    return this.get('categories');
  }

  updateCategory(category: Category): Observable<Category> {
    return this.put(`categories/${category.id}`, category);
  }

  getCategoryById(id: string): Observable<Category> {
    return this.get(`categories/${id}`)
  }

}
