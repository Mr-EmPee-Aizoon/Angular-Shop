import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../category';
import { ModelModule } from '../../model.module';

@Injectable({
  providedIn: ModelModule
})
export class CategoryRepositoryService {
  private dbURL = "http://localhost:8081/api/v1/categories";

  constructor(private httpClient:HttpClient) { }

  public getCategories() {
    return this.httpClient.get<Category[]>(this.dbURL)
  }

  public getCategoryByID(categoryID:number) {
    return this.httpClient.get<Category>(this.dbURL+ "?categoryID=" + categoryID)
  }
}
