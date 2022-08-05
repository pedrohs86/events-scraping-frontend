import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Category } from '../../models/category';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(API + '/categories');
  }

  postCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(API + '/categories', category);
  }

  deleteCategory(categoryId: number) {
    return this.http.delete(API + `/categories/${categoryId}`);
  }

}
