import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModelModule } from '../../model.module';
import { Product } from '../../product';

@Injectable({
  providedIn: ModelModule
})
export class RestRepositoryService {

  private dbURL = "http://localhost:8081/api/v1/products/";

  constructor(private httpClient:HttpClient) { }

  public getProducts() {
    return this.httpClient.get<Product[]>(this.dbURL)
  }

  public getProductByID(prodID:number) {
    return this.httpClient.get<Product>(this.dbURL+prodID)
  }

  public addProduct(product:Product) {
    return this.httpClient.post<Product>(this.dbURL, product)
  }

  public removeProduct(prodID:number) {
    return this.httpClient.delete<Product>(this.dbURL + prodID)
  }

  public updateProduct(prodID:number, product:Product) {
    return this.httpClient.put<Product>(this.dbURL+prodID, product)
  }

}
