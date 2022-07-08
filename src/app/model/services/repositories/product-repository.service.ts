import { Injectable } from '@angular/core';
import { ModelModule } from '../../model.module';
import { Product } from '../../product';
import { RestRepositoryService } from './rest-repository.service';

@Injectable({
  providedIn: ModelModule
})
export class ProductRepositoryService {

  constructor(
    private repo:RestRepositoryService
  ) { }

  getProducts() {
    return this.repo.getProducts();
  }

  getProductByID(prodID:number) {
    return this.repo.getProductByID(prodID);
  }

  updateProduct(prodID:number, product:Product) {
    return this.repo.updateProduct(prodID, product);
  }

  removeProduct(prodID:number) {
    return this.repo.removeProduct(prodID);
  }

  addProduct(product:Product) {
    return this.repo.addProduct(product);
  }

}
